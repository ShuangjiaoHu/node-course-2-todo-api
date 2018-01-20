const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect ot MongoDB server');
  }
  console.log('Connected to MongoDB server');
  // db.collection('Todos').findOneAndUpdate({
  //   _id: new ObjectID('5a629ea8275cb65be772cc50')
  // }, {
  //   $set: {
  //     completed: true
  //   }
  // }, {
  //   returnOriginal: false
  // }).then((result) => {
  //   console.log(result);
  // });

  db.collection('Users').findOneAndUpdate({
    _id: new ObjectID('5a4f34c03584136780926d3c')
  }, {
    $set: {
      name: 'Sarah'
    },
    $inc: {
      age: -11
    }
  }, {
    returnOriginal: false
  }).then((result) => {
    console.log(result);
  });
  //db.close();
});
