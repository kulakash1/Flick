const express = require('express');
const router = express.Router()

const userCommentsApiController = require('../Controllers/userComments.js');
// const { validateUser, validate } = require('../middlewares/validator.js');
// const { validateUser, validate } = require('../middlewares/validator.js');

router.get('/api/movies/list', userCommentsApiController.getAllUserComments)

module.exports = router;
