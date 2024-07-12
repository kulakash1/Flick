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
        type: sequelize.DataTypes.STRING,
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
    }
});

userSchema.beforeCreate(async (user, options) => {
    if (user.changed("password")) {
        const hash = await bcrypt.hash(user.password, 8);
        user.password = hash;
    }
});

userSchema.prototype.comparePassword = async function (password) {
    const result = await bcrypt.compare(password, this.password);
    return result;
};

module.exports = userSchema;