const mongoose = require('mongoose');

const db = () => {
  mongoose.connect('mongodb+srv://tahakorkut123:tahakorkut123@cluster0.9pr1gmp.mongodb.net/',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }).then(()=>{
    console.log("mongoose connected")
  }).catch(err => {
    console.log(err)
  })

}
module.exports = db;