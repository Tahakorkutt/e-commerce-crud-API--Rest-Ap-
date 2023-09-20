
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name :{
    type : String,
    required : true
  },
  email:{
    type:String,
    required : true,
    unique : true
  },
  password:{
    type:String,
    required : true,
    minLength : 6
   
  },
  avatar : {
    public_id:String,
    required : true
  },
  url : {
    public_id:String,
    required : true
  },
  role:{
    type:String,
    
  }

  

}, {timestamps: true})
module.exports = mongoose.model('User',userSchema)