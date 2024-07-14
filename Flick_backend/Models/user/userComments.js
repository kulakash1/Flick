const { DataTypes } = require('sequelize');
const sequelize = require('../../Utils/database.js');

const UserComment = sequelize.define("UserComment", {
    commentId: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true
    },
    criticName: {
        type: DataTypes.STRING,
        allowNull: true
    },
    profileImage: {
        type: DataTypes.STRING,
        allowNull: true
    },
    movieTitle: {
        type: DataTypes.STRING,
        allowNull: true
    },
    movieImage: {
        type: DataTypes.STRING,
        allowNull: true
    },
    movieYear: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    movieRatings: {
        type: DataTypes.FLOAT,
        allowNull: true
    },
    userComment: {
        type: DataTypes.STRING,
        allowNull: true
    },
    seeMoreLink: {
        type: DataTypes.STRING,
        allowNull: true
    }
});

module.exports = UserComment;
