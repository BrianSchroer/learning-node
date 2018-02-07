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

    await users.deleteOne({ name: 'Bob' });
  } catch (err) {
    console.error(err);
  }

  client.close();
})();
