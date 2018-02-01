const mongo = require('mongodb').MongoClient;
const assert = require('assert');

const dbName = 'learnyoumongo';
const collectionName = 'parrots';
const dbUrl = `mongodb://localhost:27017/${dbName}`;
const age = parseInt(process.argv[2]);

mongo.connect(dbUrl, (err, database) => {
  assert(err == null);

  const db = database.db(dbName);
  const collection = db.collection(collectionName);

  collection.count(
    { age: { $gt: age } },
    (err, count) => {
      assert(err == null);
      console.log(count);
      database.close();
    }
  );
});