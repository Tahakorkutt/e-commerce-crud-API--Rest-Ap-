const mongoose = require('mongoose');

const db = () => {
  mongoose.connect('',{
    useNewConnection: true
  })

}
module.exports = db;