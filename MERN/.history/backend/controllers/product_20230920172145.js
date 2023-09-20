

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
const createProduct = async (req, res) => {
  try {
    let images = [];

    if (typeof req.body.images === "string") {
      images.push(req.body.images);
    } else {
      images = req.body.images;
    }

    const allImages = [];
    for (let i = 0; i < images.length; i++) {
      const result = await cloudinary.uploader.upload(images[i], {
        folder: "products"
      });
      allImages.push({
        public_id: result.public_id,
        url: result.secure_url
      });
    }

    const product = await Product.create({
      ...req.body,
      images: allImages
    });

    res.status(201).json({
      product
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

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

