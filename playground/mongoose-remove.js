const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

//remove all
// Todo.remove({}).then((res) => {
//   console.log(res);
// });

// Todo.findOneAndRemove({_id:'5a66a96e541367ebccf732d3'}).then((todo) => {
//   console.log(todo);
// });

Todo.findByIdAndRemove('5a66a96e541367ebccf732d3').then((todo) => {
  console.log(todo);
});
