const userSchema = require('../Models/user/user.js');
const bcrypt = require('bcrypt');
const { v4: uuidv4 } = require('uuid');

// User signup
exports.signup = async (req, res) => {
    try {
        const { name, username, email, mobileNumber, password, confirmPassword } = req.body;

        // Check if user exists
        const existingUser = await userSchema.findOne({ where: { email } });
        if (existingUser) {
            return res.status(400).json({ message: 'User already exists' });
        }

        // Create new user
        const user = await userSchema.create({
            id: uuidv4(),
            name,
            username,
            email,
            mobileNumber,
            password,
        });

        res.status(201).json({ message: 'User created successfully', user });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
};

// User login
exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Validate email and password
        // if (!email || !password) {
        //     return res.status(400).json({ message: 'Email and password are required DDDD' });
        // }

        // Fetch user from database
        const user = await userSchema.findOne({ where: { email } });

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        // if (user.verified === false) {
        //     return res.status(401).json({ message: 'Please verify your email to login' });
        // }

        // Debugging: Log the fetched user and the password comparison
        console.log('Fetched user:', user);

        const isMatch = await user.comparePassword(password);

        if (!isMatch) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        res.status(200).json({ message: 'Login successful', user });
    } catch (error) {
        console.error('Server error:', error);
        res.status(500).json({ message: 'Server error', error });
    }
};

// Forgot password
exports.forgotPassword = async (req, res) => {
    try {
        const { email } = req.body;
        const user = await userSchema.findOne({ where: { email } });

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Here you would generate a reset token and send it via email
        // This is a placeholder for demonstration purposes
        res.status(200).json({ message: 'Password reset link has been sent to your email' });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
};
