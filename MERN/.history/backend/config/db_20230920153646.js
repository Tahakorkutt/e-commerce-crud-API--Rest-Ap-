const mongoose = require('mongoose');

const db = () => {
  mongoose.connect('',{
    useNewUrlParser: true,
    useUnifiedTopo
  })

}
module.exports = db;