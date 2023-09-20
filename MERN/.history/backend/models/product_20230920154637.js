
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
    type: number',
    required: true
  },
  stock : {
    type: 'string',
    required: true
  }

})
module.exports = mongoose.model('Product',productSchema)