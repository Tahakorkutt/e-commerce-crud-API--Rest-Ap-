
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name :{
    try

  }

  

}, {timestamps: true})
module.exports = mongoose.model('User',userSchema)