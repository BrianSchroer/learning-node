const db = require('./models');

(async () => {
  const rows = await db.users.findAll();
  rows.forEach(row => {
    console.log(
      `${row.name} (${row.email}): Pizza - ${row.fav_pizza}, SpaceInvaders - ${row.space_invaders}`
    );
  });
})();
