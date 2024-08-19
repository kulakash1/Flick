const { check, validationResult } = require('express-validator');

// Validation middleware for signup and update
exports.validateUser = [
    // Check if name is provided
    check('name').notEmpty().withMessage('Name is Required'),

    // Check if username is provided
    check('username').notEmpty().withMessage('Username is Required'),

    // Check if mobile number is provided and valid
    check('mobileNumber')
        .notEmpty().withMessage('Mobile Number is Required'),
        // .isMobilePhone().withMessage('Enter a valid Mobile Number'),

    // Check if email is valid
    check('email')
        .notEmpty().withMessage('Email is Required')
        .isEmail().withMessage('Enter a valid email'),

    // // Check if password is at least 6 characters long
    // check('password')
    //     .isLength({ min: 6 }).withMessage('Password must be at least 6 characters long'),

    // Check if password confirmation matches password
    check('confirmPassword').custom((value, { req }) => {
        if (value !== req.body.password) {
            throw new Error('Password confirmation does not match password');
        }
        return true;
    })
];

// Validation middleware for login
exports.validateLogin = [
    // Check if email is provided
    check('email')
        .notEmpty().withMessage('Email is Required')
        .bail() // If email is empty, stop further validation on this field
        .isEmail().withMessage('Enter a valid email'),

    // Check if password is provided
    check('password')
        .notEmpty().withMessage('Password is Required')
];

// Validation middleware for verify email
exports.validateVerifyEmail = [
    // Check if email is provided
    check('email')
        .notEmpty().withMessage('Email is Required')
        .isEmail().withMessage('Enter a valid email'),

    // Check if OTP is provided
    check('otp')
        .notEmpty().withMessage('OTP is Required')
];

// Validation middleware for forgot password
exports.validateForgotPassword = [
    // Check if email is provided
    check('email')
        .notEmpty().withMessage('Email is Required')
        .isEmail().withMessage('Enter a valid email')
];

// Validate the request and handle errors
exports.validate = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    next();
};
