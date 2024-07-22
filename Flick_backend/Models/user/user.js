const sequelize = require('sequelize');
const Sequelize = require('../../Utils/database.js');
const bcrypt = require('bcrypt');

const userSchema = Sequelize.define("user", {
    id: {
        type: sequelize.DataTypes.STRING,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: sequelize.DataTypes.STRING,
        allowNull: true
    },
    username: {
        type: sequelize.DataTypes.STRING,
        allowNull: true
    },
    email: {
        type: sequelize.DataTypes.STRING,
        allowNull: false
    },
    mobileNumber: {
        type: sequelize.DataTypes.INTEGER,
        allowNull: true
    },
    password: {
        type: sequelize.DataTypes.STRING(255), // Ensure sufficient length
        allowNull: false
    },
    profileImage: {
        type: sequelize.DataTypes.STRING,
        allowNull: true
    },
    verified: {
        type: sequelize.DataTypes.BOOLEAN,
        defaultValue: false,
        allowNull: false
    },
    otp: {
        type: sequelize.DataTypes.STRING,
        allowNull: true,
    },
});

// Hash the password before creating a new user
userSchema.beforeCreate(async (user, options) => {
    if (user.password) {
        user.password = await bcrypt.hash(user.password, 8);
    }
});

// Method to compare entered password with hashed password
userSchema.prototype.comparePassword = async function (password) {
    try {
        const isMatch = await bcrypt.compare(password, this.password);
        return isMatch;
    } catch (error) {
        console.error("Error comparing passwords:", error);
        throw new Error("Error comparing passwords");
    }
};

module.exports = userSchema;
