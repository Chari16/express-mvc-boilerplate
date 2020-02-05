const Sequelize = require('sequelize');
const db = require('../../db/sequelize')

const User = db.define('User', {
    name: {
        type: Sequelize.STRING,
    },
    email: {
        type: Sequelize.STRING,
    }
})

db.sync()
    .then(() => console.log("table created"))

module.exports = User