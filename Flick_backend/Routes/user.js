const express = require('express');
const router = express.Router()

const userApiController = require('../Controllers/user.js');
// const { validateUser, validate } = require('../middlewares/validator.js');
// const { validateUser, validate } = require('../middlewares/validator.js');

// router.post('/api/movies/list', validateUser,validate,userApiController.signup)
router.get('/api/auth/users', userApiController.getAllUsers);
router.get('/api/auth/users/:id', userApiController.getUserById);
router.post('/api/auth/users', userApiController.createUser);
router.put('/api/auth/users/:id', userApiController.updateUser);
router.delete('/api/auth/users/:id', userApiController.deleteUser);

module.exports = router;