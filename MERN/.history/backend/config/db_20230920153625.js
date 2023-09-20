const mongoose = require('mongoose');

const db = () => {
  mongoose.connect('',{
    useNew
  })

}
module.exports = db;