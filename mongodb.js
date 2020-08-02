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
    //  db.collection('users').updateOne({
    //    _id: new ObjectID('5f26faa5accff506448883b0')
    //   }, {
    //    $inc: {
    //      age: 3
    //    }
    //   })
    //   .then( result => {
    //     console.log(result);
    //   }) 
    //   .catch(err => {
    //     console.log('Could not update field');
    //   })
    // db.collection('tasks').updateMany({ completed: false},
    //   {
    //     $set: {
    //       completed: true
    //     }
    //   }).then( result => {
    //     console.log(result.matchedCount);
    //   }). catch( err => {
    //     console.log(err);
    //   })
    db.collection('tasks').deleteOne({task: 'Walk luna'})
                          .then(result => {
                    console.log(result.deletedCount)}).catch(err => {
                      console.log(err);
                    })
})

