const express = require('express');
const router = express.Router();

const authApiController = require('../Controllers/auth.js');
const { validateUser, validateLogin, validate } = require('../Middlewares/authValidator.js');

router.post('/api/auth/signup',  authApiController.signup);
// router.post('/api/auth/signup', validateUser, validate, authApiController.signup);

// router.post('/api/auth/login', authApiController.login);
router.post('/api/auth/login', validateLogin, validate, authApiController.login);

// router.post('/api/auth/login', validateLogin, validate, authApiController.login);
router.post('/api/auth/forgot-password', authApiController.forgotPassword);
router.post('/api/auth/reset-password', authApiController.resetPassword);
router.post('/api/auth/verify-email', authApiController.verifyEmail);

module.exports = router;
