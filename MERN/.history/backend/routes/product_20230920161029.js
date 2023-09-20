const express = require('express');
const router = express.Router();

const{allProducts,detailProducts,createProducts,deleteProduct,updateProduct} = require('../controllers/product.js');