const userSchema = require('../Models/user/user.js');
const bcrypt = require('bcrypt');
const { v4: uuidv4 } = require('uuid');
const nodemailer = require('nodemailer');
const crypto = require('crypto');

// Configure Nodemailer transporter
const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: process.env.NODEMAILER_EMAIL,
        pass: process.env.NODEMAILER_PASSWORD        ,
    },
});

// Function to send email
const sendEmail = (email, subject, text) => {
    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: email,
        subject,
        text,
    };
    return transporter.sendMail(mailOptions);
};

// User signup
exports.signup = async (req, res) => {
    try {
        const { name, username, email, mobileNumber, password, confirmPassword } = req.body;

        // Check if user exists
        const existingUser = await userSchema.findOne({ where: { email } });
        if (existingUser) {
            return res.status(400).json({ message: 'User already exists' });
        }

        // Generate OTP
        const otp = crypto.randomInt(100000, 999999).toString();

        // Create new user
        const user = await userSchema.create({
            id: uuidv4(),
            name,
            username,
            email,
            mobileNumber,
            password,
            otp, // Store OTP for email verification
        });

        // Send OTP email
        await sendEmail(email, 'Verify your email', `Your verification code is ${otp}`);

        res.status(201).json({ message: 'User created successfully. Check your email for verification code.', user });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
};

// Verify email
exports.verifyEmail = async (req, res) => {
    try {
        const { email, otp } = req.body;
        const user = await userSchema.findOne({ where: { email, otp } });

        if (!user) {
            return res.status(400).json({ message: 'Invalid OTP or email' });
        }

        user.verified = true;
        user.otp = null; // Clear the OTP after successful verification
        await user.save();

        res.status(200).json({ message: 'Email verified successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
};

// Forgot password
exports.forgotPassword = async (req, res) => {
    // console.log("email: ENEJ ");
    try {
        const { email } = req.body;
        console.log("email: ",email);
        const user = await userSchema.findOne({ where: { email } });
        // console.log("user: ",user);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Generate OTP for password reset
        const otp = crypto.randomInt(100000, 999999).toString();
        user.otp = otp;
        await user.save();

        // // Send OTP email
        await sendEmail(email, 'Password reset code', `Your password reset code is ${otp}`);

        res.status(200).json({ message: 'Password reset code has been sent to your email' });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
};

// Reset password
exports.resetPassword = async (req, res) => {
    try {
        const { email, otp, newPassword, confirmPassword } = req.body;

        if (newPassword !== confirmPassword) {
            return res.status(400).json({ message: 'Passwords do not match' });
        }

        const user = await userSchema.findOne({ where: { email, otp } });

        if (!user) {
            return res.status(400).json({ message: 'Invalid OTP or email' });
        }

        user.password = await bcrypt.hash(newPassword, 8);
        user.otp = null; // Clear the OTP after successful password reset
        await user.save();

        res.status(200).json({ message: 'Password reset successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
};
