
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name :{
    trype : String,
    

  }

  

}, {timestamps: true})
module.exports = mongoose.model('User',userSchema)