const sqlite3 = require('sqlite3');

const db = new sqlite3.Database('users.sqlite');

db.run("UPDATE users SET space_invaders = 99999999 WHERE name='PJ'", (err, row) => {
  if (err) {
    console.log(`Error: ${err}`);
  } else {
    console.log('Row updated');
  }
});

db.close();
