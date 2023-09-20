

const Product = require('../models/product')

const allProducts = async(req,res)=>{

  const products = await Product.find()

}
module.exports = {allProducts}

