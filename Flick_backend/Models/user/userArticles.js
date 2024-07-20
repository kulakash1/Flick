const { DataTypes } = require('sequelize');
const sequelize = require('../../Utils/database.js');

const UserArticle = sequelize.define("UserArticle", {
    imageUrl: {
        type: DataTypes.STRING,
        allowNull: false
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    byPerson: {
        type: DataTypes.STRING,
        allowNull: true
    },
    description: {
        type: DataTypes.STRING,
        allowNull: true
    },
    link: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

module.exports = UserArticle;
