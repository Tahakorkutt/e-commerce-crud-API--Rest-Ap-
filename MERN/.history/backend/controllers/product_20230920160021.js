

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

//admin
const createProducts = async(req,res)=>{

  const products = await Product.create(req.body)
  
  res.status(201).json({
    product
  })

}

const deleteProducts = async(req,res)=>{

  const products = await Product.create(req.body)
  
  res.status(201).json({
    product
  })

}



module.exports = {allProducts,detailProducts,createProducts}

