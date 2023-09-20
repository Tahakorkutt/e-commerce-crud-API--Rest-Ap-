const express = require('express');

const{allProducts,detailProducts,createProducts,deleteProduct,updateProduct} = require('../controllers/product.js');

const router = express.Router();




module.exports = router;