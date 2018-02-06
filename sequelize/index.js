const model = require('./model');

const User = model.User;

User.findAll().then(rows => {
  rows.forEach(row => {
    console.log(
      `${row.name} (${row.email}): Pizza - ${row.fav_pizza}, SpaceInvaders - ${row.space_invaders}`
    );
  });
});
