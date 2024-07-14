const UserComment = require('../Models/user/userComments.js');

exports.getAllUserComments = async (req, res) => {
    try {
        const comments = await UserComment.findAll();
        res.status(200).json(comments);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getUserCommentById = async (req, res) => {
    try {
        const comment = await UserComment.findByPk(req.params.commentId);
        if (comment) {
            res.status(200).json(comment);
        } else {
            res.status(404).json({ message: 'Comment not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.createUserComment = async (req, res) => {
    try {
        const { commentId, criticName, profileImage, movieTitle, movieImage, movieYear, movieRatings, userComment, seeMoreLink } = req.body;

        if (!commentId) {
            return res.status(400).json({ message: 'Comment ID is required' });
        }

        const newComment = await UserComment.create({ commentId, criticName, profileImage, movieTitle, movieImage, movieYear, movieRatings, userComment, seeMoreLink });
        res.status(201).json(newComment);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.updateUserComment = async (req, res) => {
    try {
        const comment = await UserComment.findByPk(req.params.commentId);
        if (comment) {
            const { criticName, profileImage, movieTitle, movieImage, movieYear, movieRatings, userComment, seeMoreLink } = req.body;

            await comment.update({ criticName, profileImage, movieTitle, movieImage, movieYear, movieRatings, userComment, seeMoreLink });
            res.status(200).json(comment);
        } else {
            res.status(404).json({ message: 'Comment not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.deleteUserComment = async (req, res) => {
    try {
        const comment = await UserComment.findByPk(req.params.commentId);
        if (comment) {
            await comment.destroy();
            res.status(200).json({ message: 'Comment deleted' });
        } else {
            res.status(404).json({ message: 'Comment not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
