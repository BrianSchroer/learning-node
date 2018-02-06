const sqlite3 = require('sqlite3');

const db = new sqlite3.Database('users.sqlite');

db.run("DELETE from users WHERE name='Bob'", (err, row) => {
  if (err) {
    console.log(`Error: ${err}`);
  } else {
    console.log('Row deleted');
  }
});

db.close();
