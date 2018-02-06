const sqlite3 = require('sqlite3');

const db = new sqlite3.Database('example.sqlite');

db.serialize(() => {
  db.run('DROP TABLE IF EXISTS cheeses');
  db.run('CREATE TABLE cheeses (name TEXT)');
  const stmt = db.prepare('INSERT INTO cheeses VALUES (?)');

  [
    'Cheddar',
    'Wensleydale',
    'Red Leicester',
    'Stilton',
    'Yarg',
    'Oxford Blue',
    'Brie',
    'Cheshire'
  ].forEach(cheese => stmt.run(cheese));

  stmt.finalize();

  db.each('SELECT rowid as id, name FROM cheeses', (err, row) => {
    console.log(`${row.id}: ${row.name}`);
  });
});

db.close();
