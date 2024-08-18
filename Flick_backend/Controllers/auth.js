const userSchema = require("../Models/user/user.js");
const bcrypt = require("bcrypt");
const { v4: uuidv4 } = require("uuid");
const nodemailer = require("nodemailer");
const crypto = require("crypto");
const { sendError } = require("../Utils/helper.js");
const {
  mailTransport,
  generateEmailTemplate,
  generatePasswordResetTemplate,
  plainEmailTemplate,
} = require("../Utils/emailTemplate.js");

// // Configure Nodemailer transporter
// const transporter = nodemailer.createTransport({
//     service: 'Gmail',
//     auth: {
//         user: process.env.NODEMAILER_EMAIL,
//         pass: process.env.NODEMAILER_PASSWORD,
//     },
// });

// // Function to send email
// const sendEmail = (email, subject, text) => {
//     const mailOptions = {
//         from: process.env.EMAIL_USER,
//         to: email,
//         subject,
//         text,
//     };
//     return transporter.sendMail(mailOptions);
// };

// User signup
exports.signup = async (req, res) => {
  try {
    const { name, username, email, mobileNumber, password, confirmPassword } =
      req.body;

    // Check if user exists
    const existingUser = await userSchema.findOne({ where: { email } });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
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

    // Email options
    const mailOptions = {
      from: "swaadsay01@gmail.com",
      to: email,
      cc: "akashkulshrestha7@gmail.com",
      subject: "Verify your Email Address",
      html: generateEmailTemplate(otp),
    };

    // Send verification email
    await mailTransport.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
        return sendError(res, "Failed to send verification email!", 500);
      } else {
        console.log("Email sent: " + info.response);
        return res.status(201).json({
          message: "User registered successfully! Please verify your email.",
        });
      }
    });
  } catch (error) {
    console.error(error);
    return sendError(res, "Server error", 500);
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    console.log("Login attempt", email, password);

    // // Validate email and password
    // if (!email.trim() && !password.trim()) {
    //     return sendError(res, "Email and password are required", 400);
    // }
    // else if (!email.trim()) {
    //     return sendError(res, "Email is required", 400);
    // }
    // else if (!password.trim()) {
    //     return sendError(res, "Password is required", 400);
    // }

    // Check if user exists
    const user = await userSchema.findOne({ where: { email } });
    if (!user) {
      return sendError(res, "This User not found!", 404);
    }

    // Compare password
    const isMatched = await bcrypt.compare(password, user.password);
    if (!isMatched) {
      return sendError(res, "Password not matched!", 401);
    }

    // Generate JWT token (uncomment and adjust as needed)
    // const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, {
    //     expiresIn: '2d'
    // });

    return res.status(200).json({
      message: "Login successful!",
      // token, // Return the token if generated
    });
  } catch (error) {
    console.error(error);
    return sendError(res, "Server error", 500);
  }
};

// Verify email
exports.verifyEmail = async (req, res) => {
  try {
    const { email, otp } = req.body;
    if (!email.trim() && !otp.trim()) return sendError(res, "Invalid parameters!", 400);
    // const user = await userSchema.findOne({ where: { email, otp } });
    const user = await userSchema.findOne({ where: { email } });
    
    console.log("1 uUSSEER User Verify Aaaya: ");
    if (!user) {
      return res.status(400).json({ message: "Invalid OTP or email" });
    }
    console.log("2 uUSSEER User Verify Aaaya: ");

    if (user.verified)
      return sendError(res, "This user is already verified!", 400);

    if (user.otp !== otp) {
      return sendError(res, "Invalid OTP!", 400);
    }
    user.verified = true;
    user.otp = null; // Clear the OTP after successful verification
    await user.save();

    // Email options
    const mailOptions = {
      from: "swaadsay01@gmail.com",
      to: email,
      cc: "akashkulshrestha7@gmail.com",
      subject:"Welcome! Fasten your seat belts. You are onboarded to the Foodie Ride.",
      html: plainEmailTemplate(
        "Email Verified Sucessfully",
        "Thanks for connecting with us"
      ),
    };
    // Send OTP verification email
    await mailTransport.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
        return sendError(res, "Failed to send verification email!", 500);
      } else {
        console.log("Email sent: " + info.response);
        return res.status(201).json({
          message: "User's Email Verified.",
        });
      }
    });
  } catch (error) {
    console.error(error);
    return sendError(res, "Server error", 500);
  }
};

// Forgot password
exports.forgotPassword = async (req, res) => {
  // console.log("email: ENEJ ");
  try {
    const { email } = req.body;
    console.log("email: ", email);
    const user = await userSchema.findOne({ where: { email } });
    // console.log("user: ",user);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Generate OTP for password reset
    const otp = crypto.randomInt(100000, 999999).toString();
    user.otp = otp;
    await user.save();

    // console.log("Aww aaya", req.body);
    // Senf OTP email
    // Email options
    const mailOptions = {
      from: "swaadsay01@gmail.com",
      to: email,
      cc: "akashkulshrestha7@gmail.com",
      subject: "Reset Password",
      html: generatePasswordResetTemplate(
        `http://localhost:3000/forgot-password?otpToken=${otp}&id=${email}`,
        `Password Reset link is sent to ${email}`
      ),
    };

    // Send verification email
    await mailTransport.sendMail(mailOptions, function (error, info) {
      if (error) {
        // console.log(error);
        return sendError(res, "Failed to send Password Reset link!", 500);
      } else {
        // console.log("Email sent: " + info.response);
        return res.status(201).json({
          message: "Password Reset link sent to user.",
        });
      }
    });
  } catch (error) {
    console.error(error);
    return sendError(res, "Server error", 500);
  }
};

// Reset password
exports.resetPassword = async (req, res) => {
  try {
    const { email, otp, newPassword, confirmPassword } = req.body;

    if (newPassword !== confirmPassword) {
      return res.status(400).json({ message: "Passwords do not match" });
    }

    const user = await userSchema.findOne({ where: { email } });

    if (!user) {
      return res.status(404).json({ message: "User Not Found!" });
    }

    if (user.otp !== otp) {
      return res.status(400).json({ message: "Invalid OTP" });
    }

    if(!user.verified) {
      return res.status(400).json({ message: "User not verified! Plese Verify your account first" });
    }
    
    user.password = await bcrypt.hash(newPassword, 8);
    user.otp = null; // Clear the OTP after successful password reset
    await user.save();

    res.status(200).json({ message: "Password reset successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};
