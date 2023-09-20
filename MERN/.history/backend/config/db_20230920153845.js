const mongoose = require('mongoose');

const db = () => {
  mongoose.connect('',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }).then(()=>{
    console.log("mongoose connected")
  }).catch()

}
module.exports = db;