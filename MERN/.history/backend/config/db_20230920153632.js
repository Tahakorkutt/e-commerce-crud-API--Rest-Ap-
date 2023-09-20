const mongoose = require('mongoose');

const db = () => {
  mongoose.connect('',{
    useNew: true
  })

}
module.exports = db;