const mongoose = require('mongoose');
const URL = 'mongodb://mrez:7582062@ds145292.mlab.com:45292/mydb';
mongoose.Promise = global.Promise;

mongoose.connect(URL);
console.log('on URL: ', URL);

module.exports = {
  mongoose
};
