const mongoose = require('mongoose');

const db = () => {
  mongoose.connect('',{
    useNewUrlParser: true,
    useUnifiedTo
  })

}
module.exports = db;