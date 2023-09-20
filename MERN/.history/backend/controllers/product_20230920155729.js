

const Product = require('../models/product')

const allProducts = async(req,res)=>{

  const products = await Product.find()
  
  res.status(200).json({})

}
module.exports = {allProducts}

