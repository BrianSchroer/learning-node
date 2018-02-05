const sqlite3 = require('sqlite3');

const db = new sqlite3.Database('example.sqlite');

db.each('SELECT rowid as id, name FROM cheeses', (err, row) => {
  console.log(`${row.id}: ${row.name}`);
});
