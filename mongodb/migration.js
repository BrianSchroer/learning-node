// Before executing this file:
// "mongod --dbpath ./data" (or, to use "global" data folder): "mongod"

const mongoClient = require('mongodb').MongoClient;

const url = 'mongodb://localhost:27017';
const dbName = 'users';

(async () => {
  const client = await mongoClient.connect(url);

  try {
    const db = client.db(dbName);
    console.log('Database created');

    let users = await db.collection('users');

    if (users) {
      await users.drop();
      console.log('Collection dropped');
    }

    users = await db.createCollection('users');
    console.log('Collection created');

    await users.insertMany([
      { name: 'PJ', email: 'pj@company.org', fav_pizza: 'Pepperoni', space_invaders: 826488 },
      { name: 'Trish', email: 'trish@company.org', fav_pizza: 'Spicy Veg', space_invaders: 674588 },
      { name: 'Paddy', email: 'paddy@company.org', fav_pizza: 'Ham', space_invaders: 998988 },
      { name: 'Bob', email: 'bob@company.org', fav_pizza: 'Onion', space_invaders: 6577 },
      { name: 'Alice', email: 'alice@company.org', fav_pizza: 'Everything', space_invaders: 929848 }
    ]);
    console.log('Documents created');
  } catch (err) {
    console.error(err);
  }

  client.close();
})();
