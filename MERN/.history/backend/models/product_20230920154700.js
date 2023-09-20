
const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name :{
    type: 'string',
    required: true
  },
  description :{
    type: 'string',
    required: true
  },
  price : {
    type: Number,
    required: true
  },
  stock : {
    type: Number,
    required: true
    default: 1
  }

})
module.exports = mongoose.model('Product',productSchema)