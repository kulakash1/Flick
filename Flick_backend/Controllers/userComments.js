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
        const newComment = await UserComment.create(req.body);
        res.status(201).json(newComment);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.updateUserComment = async (req, res) => {
    try {
        const comment = await UserComment.findByPk(req.params.commentId);
        if (comment) {
            await comment.update(req.body);
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
