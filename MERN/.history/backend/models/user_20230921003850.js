const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true,
    minlength: 6
  },
  avatar: {
    type: String,
    required: true
  },
  url: {
    type: String,
    required: true
  },
  role: {
    type: String,
    default: "user",
    required: true
  },
  resetPassword:s
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);