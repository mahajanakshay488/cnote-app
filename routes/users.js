const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/dbname');

var userSchema = mongoose.Schema({
  name: String,
  email: String
});

module.exports = mongoose.model('users', userSchema);