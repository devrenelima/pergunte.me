const Sequelize = require('sequelize');

const connection = new Sequelize('bdpergunte', 'root', 'Cachaça123', {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = connection;