const mongoose = require('mongoose');

const db = () => {
  mongoose.connect('',{
    usenew
  })

}
module.exports = db;