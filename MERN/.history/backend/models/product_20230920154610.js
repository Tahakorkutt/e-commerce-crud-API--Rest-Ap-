
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
    type: 'number',
    
  }

})
module.exports = mongoose.model('Product',productSchema)