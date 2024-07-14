const express = require('express');
const router = express.Router()

const userCommentsApiController = require('../Controllers/userComments.js');
// const { validateUser, validate } = require('../middlewares/validator.js');
// const { validateUser, validate } = require('../middlewares/validator.js');

router.get('/api/users/commentlist', userCommentsApiController.getAllUserComments);
router.post('/api/users/commentlist', userCommentsApiController.createUserComment);
router.put('/api/users/commentlist/:commentId', userCommentsApiController.updateUserComment);
router.delete('/api/users/commentlist/:commentId', userCommentsApiController.deleteUserComment);

module.exports = router;
