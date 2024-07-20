const express = require('express');
const router = express.Router();

const userArticlesApiController = require('../Controllers/userArticles.js'); // Adjust path if needed
// const { validateUser, validate } = require('../middlewares/validator.js'); // Uncomment and adjust if validation is needed

router.get('/api/users/articlelist', userArticlesApiController.getAllUserArticles);
router.post('/api/users/articlelist', userArticlesApiController.createUserArticle);
router.put('/api/users/articlelist/:articleId', userArticlesApiController.updateUserArticle);
router.delete('/api/users/articlelist/:articleId', userArticlesApiController.deleteUserArticle);

module.exports = router;
