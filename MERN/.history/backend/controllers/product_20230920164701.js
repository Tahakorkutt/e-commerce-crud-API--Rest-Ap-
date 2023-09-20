

const Product = require('../models/product')
const ProductFilter = require('../utils/productFilter.js')

const allProducts = async(req,res)=>{
  const productFilter = new ProductFilterProduct.find(),req.query.search().filter()

  const products = await productFilter.query;

  
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

const deleteProduct = async(req,res)=>{

  const product = await Product.findById(req.params.id);
  product.remove();
   
 
  res.status(200).json({
    message : "ürün başarıyla silindi.."
  })

}

const updateProduct = async(req,res)=>{

  const product = await Product.findById(req.params.id);
  const updatedProduct = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
   
 
  res.status(200).json({
   product
  })

}



module.exports = {allProducts,detailProducts,createProducts,deleteProduct,updateProduct}

