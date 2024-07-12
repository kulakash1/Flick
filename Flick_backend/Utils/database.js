const sequelize = require('sequelize');

const Sequelize = new sequelize("flick","root","", {
    dialect: 'mysql',
    host: 'localhost'
})

// Database can be created by running this in cli:
// sequelize db:create


module.exports = Sequelize;