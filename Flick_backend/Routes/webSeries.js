const express = require('express');
const router = express.Router()

const webSeriesApiController = require('../Controllers/webSeries.js');
// const { validateUser, validate } = require('../middlewares/validator.js');
// const { validateUser, validate } = require('../middlewares/validator.js');

// router.post('/api/movies/list', validateUser,validate,userController.signup)
router.get('/api/webseries/list', webSeriesApiController.webSeriesList)
// router.get('/api/movies/popularlist', webSeriesApiController.popularMovieList)
// router.get('/api/movies/upcominglist', webSeriesApiController.upcomingMovieList)
// router.post('/login', userController.login)
// router.post('/verify-email', userController.verifyEmail)
// router.post('/forgot-password', userController.forgotPassword)
// router.post('/forgot-password/:otpToken/:id', userController.handleForgotPasswordQuery)


// router.get('/forgot-password', userController.handleForgotPasswordQuery)
// router.get('/forgot-password/:otpToken/:id', userController.handleForgotPasswordQuery)
// router.post('/forgot-password', userController.handleForgotPasswordQuery)

module.exports = router;