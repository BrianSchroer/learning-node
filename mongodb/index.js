// Before executing this file:
// "mongod --dbpath ./data" (or, to use "global" data folder): "mongod"

const mongoClient = require('mongodb').MongoClient;

const url = 'mongodb://localhost:27017';
const dbName = 'users';

(async () => {
  const client = await mongoClient.connect(url);

  try {
    const db = client.db(dbName);
    const users = await db.collection('users');
    const docs = await users.find().toArray();
    console.log(docs);
  } catch (err) {
    console.error(err);
  }

  client.close();
})();
