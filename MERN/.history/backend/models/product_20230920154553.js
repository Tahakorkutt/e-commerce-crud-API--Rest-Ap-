
const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name :{
    type: 'string',
    required: true
  },
  description :{
    
  }

})
module.exports = mongoose.model('Product',productSchema)