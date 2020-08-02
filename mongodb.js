// const mongodb = require('mongodb');
// const mongoClient = mongodb.MongoClient;
// const ObjectID = mongodb.ObjectId
// Same thing is above ^^^^^ but using destructuring. better practice. 
const { MongoClient, ObjectID} = require('mongodb')

// const id = new ObjectID()
// console.log(id);
// console.log(id.getTimestamp());

const connectionURL = 'mongodb://127.0.0.1:27017';
const databaseName = 'task-manager'

MongoClient.connect(connectionURL, {useNewUrlParser: true
}, (error, client) => {
  if(error) {
   return console.log('Unable to connect to database');
  }
  const db = client.db(databaseName)
      
})

