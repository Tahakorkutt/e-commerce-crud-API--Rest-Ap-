

const Product = require('../models/product')

const allProducts = async(req,res)=>{

  const products = await Product.find()
  
  res.status(200).json({
    products
  })

}

const detailProducts = async(req,res)=>{

  const products = await Product.findById(req.params.id)
  
  res.status(200).json({
    product
  })

}




module.exports = {allProducts,detailProducts}

