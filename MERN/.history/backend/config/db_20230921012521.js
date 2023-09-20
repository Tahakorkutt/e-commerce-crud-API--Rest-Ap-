const mongoose = require('mongoose');

const db = () => {
  mongoose.connect('',{ //Mongodb url
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }).then(()=>{
    console.log("mongoose connected")
  }).catch(err => {
    console.log(err)
  })

}
module.exports = db;