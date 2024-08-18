const express = require('express');
const router = express.Router();

const authApiController = require('../Controllers/auth.js');
const {
    validateUser,
    validateLogin,
    validateVerifyEmail,
    validateForgotPassword,
    validate
} = require('../Middlewares/authValidator.js');

// Signup route with validation
router.post('/api/auth/signup', validateUser, validate, authApiController.signup);

// Login route with validation
router.post('/api/auth/login', validateLogin, validate, authApiController.login);

// Forgot password route with validation
router.post('/api/auth/forgot-password', validateForgotPassword, validate, authApiController.forgotPassword);

// Reset password route (can add validation if needed)
router.post('/api/auth/reset-password', authApiController.resetPassword);

// Verify email route with validation
router.post('/api/auth/verify-email', validateVerifyEmail, validate, authApiController.verifyEmail);

module.exports = router;
