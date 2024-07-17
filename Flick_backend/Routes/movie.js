const express = require('express');
const router = express.Router()

const movieApiController = require('../Controllers/movie.js');
// const { validateUser, validate } = require('../middlewares/validator.js');
// const { validateUser, validate } = require('../middlewares/validator.js');

// router.post('/api/movies/list', validateUser,validate,userController.signup)
router.get('/api/movies/list', movieApiController.movieList)
router.get('/api/movies/popularlist', movieApiController.popularMovieList)
// router.post('/login', userController.login)
// router.post('/verify-email', userController.verifyEmail)
// router.post('/forgot-password', userController.forgotPassword)
// router.post('/forgot-password/:otpToken/:id', userController.handleForgotPasswordQuery)


// router.get('/forgot-password', userController.handleForgotPasswordQuery)
// router.get('/forgot-password/:otpToken/:id', userController.handleForgotPasswordQuery)
// router.post('/forgot-password', userController.handleForgotPasswordQuery)

module.exports = router;




// app.get('/api/movies/list', async (req, res) => {
//     try {
//         const movies = await fetchMovies();
//         res.json(movies);
//     } catch (err) {
//         console.error('Error:', err);
//         res.status(500).json({ error: 'An error occurred' });
//     }
// });
