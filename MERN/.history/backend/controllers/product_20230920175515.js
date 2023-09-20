

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

 const adminProducts = async (req,res,next)=>{
  const products = await Product.find()
  res.status(200).json({
    products
  })
 }

const detailProducts = async(req,res,next)=>{

  const products = await Product.findById(req.params.id)
  
  res.status(200).json({
    product
  })

}

//admin
const createProducts = async (req, res,next) => {
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
    req.body.images = allImage;

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

const deleteProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);

    // Delete images from Cloudinary
    for (let i = 0; i < product.images.length; i++) {
      await cloudinary.uploader.destroy(product.images[i].public_id);
    }

    // Remove product from the database
    await product.remove();

    res.status(200).json({
      message: "Ürün başarıyla silindi."
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateProduct = async (req, res,next) => {
  try {
    let images = [];

    if (typeof req.body.images === "string") {
      images.push(req.body.images);
    } else {
      images = req.body.images;
    }

    const allImages = [];
    if (images !== undefined) {
      for (let i = 0; i < images.length; i++) {
        const result = await cloudinary.uploader.upload(images[i], {
          folder: "products"
        });
        allImages.push({
          public_id: result.public_id,
          url: result.secure_url
        });
      }
    }

    req.body.images = allImages;

    const product = await Product.findById(req.params.id, req.body,{new:true, runValidators: true});
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.status(200).json({
      product: updatedProduct
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const createReview = async (req, res, next) => {
  try {
    const { productId, comment, rating } = req.body;

    // Assuming you have Review and Product models defined
    const review = await Review.create({
      user: req.user._id,
      name: req.user.name,
      comment,
      rating: Number(rating)
    });

    const product = await Product.findById(productId);

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    product.reviews.push(review);

    let avg = 0;

    product.reviews.forEach(rev => {
      avg += rev.rating;
    });

    product.rating = avg / product.reviews.length;
    await product.save({ validateBeforeSave: false });

    res.status(201).json({
      review,
      averageRating: product.rating // Sending back the average rating
    });
  } catch (error) {
    next(error);
  }
};









module.exports = {allProducts,detailProducts,createProducts,deleteProduct,updateProduct,createReview}

