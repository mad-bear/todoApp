const {mongoose} = require('../db/mongoose');
var UserSchem = mongoose.Schema({
  email: {
    type: String,
    required: true,
    minlength: 1,
    trim: true
  }
});

var Users = mongoose.model('Users', UserSchem);

module.exports = {
  Users
};
