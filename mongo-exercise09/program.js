const mongo = require('mongodb').MongoClient;
const assert = require('assert');

const dbName = 'learnyoumongo';
const collectionName = 'prices';
const dbUrl = `mongodb://localhost:27017/${dbName}`;
const size = process.argv[2];

mongo.connect(dbUrl, (err, database) => {
  assert(err == null);

  const db = database.db(dbName);
  const collection = db.collection(collectionName);

  collection
    .aggregate([
      { $match: { size } },
      { $group: { _id: null, averagePrice: { $avg: '$price' } } }
    ])
    .toArray((err, results) => {
      assert(err == null);

      if (!results.length) {
        throw new Error(`No items found matching size "${size}"`);
      }

      console.log(results[0].averagePrice.toFixed(2));
      database.close();
    }
    );
});