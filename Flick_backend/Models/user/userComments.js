const sequelize = require('sequelize');
const Sequelize = require('../../Utils/database.js');

const userCommentSchema = Sequelize.define("userComment", {
    commentId: {
        type: sequelize.DataTypes.STRING,
        allowNull: false,
        primaryKey: true
    },
    criticName: {
        type: sequelize.DataTypes.STRING,
        allowNull: true
    },
    profileImage: {
        type: sequelize.DataTypes.STRING,
        allowNull: true
    },
    movieTitle: {
        type: sequelize.DataTypes.STRING,
        allowNull: true
    },
    movieYear: {
        type: sequelize.DataTypes.INTEGER,
        allowNull: true
    },
    movieRatings: {
        type: sequelize.DataTypes.FLOAT,
        allowNull: true
    },
    userComment: {
        type: sequelize.DataTypes.STRING,
        allowNull: true
    },
    seeMoreLink: {
        type: sequelize.DataTypes.STRING,
        allowNull: true
    }
});

module.exports = userCommentSchema;
