const mongoose = require('mongoose');
const URL = 'mongodb://mrez:7582062@ds145292.mlab.com:45292/mydb' | 'mongodb://localhost:27017/TodoApp';
mongoose.Promise = global.Promise;

mongoose.connect(process.env.MONGO_ADD || 'mongodb://localhost:27017/TodoApp');
console.log('on URL: ', URL);

module.exports = {
  mongoose
};
