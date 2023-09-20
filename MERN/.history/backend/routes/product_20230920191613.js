const express = require('express');

const{allProducts,detailProducts,createProducts,deleteProduct,updateProduct,createReview,adminProducts} = require('../controllers/product.js');
const 
const router = express.Router();

router.get('/products',allProducts)
router.get('/admin/products',authenticationMid,adminProducts)
router.get('/products/:id',detailProducts)
router.post('/products/new',createProducts)
router.post('/products/newReview',createReview)
router.delete('products/:id',deleteProduct)
router.put('/products/:id',updateProduct)




module.exports = router;