'use strict';

module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.bulkInsert(
      'users',
      [
        {
          name: 'PJ',
          email: 'pj@company.org',
          fav_pizza: 'Pepperoni',
          space_invaders: 826488,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Trish',
          email: 'trish@company.org',
          fav_pizza: 'Spicy Veg',
          space_invaders: 674588,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Paddy',
          email: 'paddy@company.org',
          fav_pizza: 'Ham',
          space_invaders: 998988,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Bob',
          email: 'bob@company.org',
          fav_pizza: 'Onion',
          space_invaders: 6577,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Alice',
          email: 'alice@company.org',
          fav_pizza: 'Everything',
          space_invaders: 929848,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    ),
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('users', null, {});
  }
};
