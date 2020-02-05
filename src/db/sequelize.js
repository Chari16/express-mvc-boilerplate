const Sequelize = require('sequelize');

const database = 'boilerplate';
const username = 'root';
const password = '';
const hostname = 'localhost';

const db = new Sequelize(database, username, password, {
		host: hostname,
		dialect: 'mysql',
		pool: {
			max: 5,
			min: 0,
			idle: 10000
		}
});

db.authenticate()
    .then(() => console.log('Database Connected'))
	.catch(err => console.log('Error'+ err))

module.exports = db;