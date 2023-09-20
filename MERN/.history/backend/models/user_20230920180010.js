
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name :{
    
  }

  

}, {timestamps: true})
module.exports = mongoose.model('User',userSchema)