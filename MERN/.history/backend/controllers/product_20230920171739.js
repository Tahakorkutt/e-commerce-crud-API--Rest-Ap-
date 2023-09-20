

const Product = require('../models/product')
const ProductFilter = require('../utils/productFilter.js')
const cloudinary = require('cloudinary');

const allProducts = async(req,res)=>{
  const resultPerPage = 10;
  const productFilter = new ProductFilter (Product.find(),req.query).search().filter().pagination(resultPerPage);

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
  let images = [];
  if(type req.body.images =="string"){
    images.push( req.body.images)

  }else{
    images = req,body.images

  }
  let allImage = [];
  for(let i=0; i<images.length; ++){
    const result = await 
    
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

