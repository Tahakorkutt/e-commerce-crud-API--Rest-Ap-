
const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name :{
    type: String,
    required: true
  },
  description :{
    type: String,
    required: true
  },
  price : {
    type: Number,
    required: true
  },
  stock : {
    type: Number,
    required: true,
    default: 1

  },
  category : {
    type: String,
    required: true
  },
  images : [
    {
      public_id: {
        type: String,
        required: true

      },
      url: {
        type: String,
        required: true
      }
    }
  ],
  reviews : [{
    name:{
      type: String,
      required: true
    },
    comment:{
      type: String,
      required: true
    },
    raiting:{
      type: String,
      required: true
    }
  }]

})
module.exports = mongoose.model('Product',productSchema)