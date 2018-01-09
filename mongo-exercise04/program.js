const mongo = require('mongodb').MongoClient;
const assert = require('assert');

const dbName = 'learnyoumongo';
const dbUrl = `mongodb://localhost:27017/${dbName}`;
const minimumAge = parseInt(process.argv[2]);

mongo.connect(dbUrl, (err, database) => {
  assert(err == null);

  const db = database.db(dbName);
  const parrots = db.collection('parrots');

  parrots
    .find({ age: { $gt: minimumAge } })
    .project({ name: 1, age: 1, _id: 0 })
    .toArray((err, docs) => {
      assert(err == null);
      console.log(docs);
    });

  database.close();
});