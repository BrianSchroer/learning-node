const Sequelize = require('sequelize');

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: 'users.sqlite',
  operatorsAliases: false
});

// Define model:

const User = sequelize.define('users', {
  name: Sequelize.STRING,
  email: Sequelize.STRING,
  fav_pizza: Sequelize.STRING,
  space_invaders: Sequelize.INTEGER
});

exports.User = User;
