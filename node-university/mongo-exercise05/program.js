const mongo = require('mongodb').MongoClient;
const assert = require('assert');

const dbName = 'learnyoumongo';
const dbUrl = `mongodb://localhost:27017/${dbName}`;
const [firstName, lastName] = process.argv.slice(2);

const newDoc = { firstName, lastName };

mongo.connect(dbUrl, (err, database) => {
  assert(err == null);

  const db = database.db(dbName);
  const docs = db.collection('docs');

  docs.insert(newDoc, (err, data) => {
    assert(err == null);
    console.log(JSON.stringify(newDoc));
  });

  database.close();
});