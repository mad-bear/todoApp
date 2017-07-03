const {mongoose} = require('../db/mongoose');
var todoSchem = mongoose.Schema({
  text: String, completed: Boolean, completeAt: Number
});
var Todo = mongoose.model('Todo', todoSchem);

module.exports = {
  Todo
};
