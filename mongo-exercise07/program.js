const mongo = require('mongodb').MongoClient;
const assert = require('assert');

const [dbName, collectionName, removeId] = process.argv.slice(2);
const dbUrl = `mongodb://localhost:27017/${dbName}`;

mongo.connect(dbUrl, (err, database) => {
  assert(err == null);

  const db = database.db(dbName);
  const collection = db.collection(collectionName);

  collection.remove(
    { _id: removeId },
    err => {
      assert(err == null);
      database.close();
    }
  );
});