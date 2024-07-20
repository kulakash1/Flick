const UserArticle = require('../Models/user/userArticles.js'); // Adjust path if needed

exports.getAllUserArticles = async (req, res) => {
    try {
        const articles = await UserArticle.findAll();
        res.status(200).json(articles);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getUserArticleById = async (req, res) => {
    try {
        const article = await UserArticle.findByPk(req.params.articleId);
        if (article) {
            res.status(200).json(article);
        } else {
            res.status(404).json({ message: 'Article not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.createUserArticle = async (req, res) => {
    try {
        const { imageUrl, title, byPerson, description, link } = req.body;

        if (!title || !link) {
            return res.status(400).json({ message: 'Title and link are required' });
        }

        const newArticle = await UserArticle.create({ imageUrl, title, byPerson, description, link });
        res.status(201).json(newArticle);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.updateUserArticle = async (req, res) => {
    try {
        const article = await UserArticle.findByPk(req.params.articleId);
        if (article) {
            const { imageUrl, title, byPerson, description, link } = req.body;

            await article.update({ imageUrl, title, byPerson, description, link });
            res.status(200).json(article);
        } else {
            res.status(404).json({ message: 'Article not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.deleteUserArticle = async (req, res) => {
    try {
        const article = await UserArticle.findByPk(req.params.articleId);
        if (article) {
            await article.destroy();
            res.status(200).json({ message: 'Article deleted' });
        } else {
            res.status(404).json({ message: 'Article not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
