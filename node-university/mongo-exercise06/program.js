const mongo = require('mongodb').MongoClient;
const assert = require('assert');

const dbName = process.argv[2];
const dbUrl = `mongodb://localhost:27017/${dbName}`;

mongo.connect(dbUrl, (err, database) => {
  assert(err == null);

  const db = database.db(dbName);
  const users = db.collection('users');

  users.update(
    { name: 'Tina' },
    { $set: { age: 40 } },
    err => {
      assert(err == null);
      database.close();
    }
  );
});