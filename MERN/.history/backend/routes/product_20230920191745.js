const express = require('express');

const{allProducts,detailProducts,createProducts,deleteProduct,updateProduct,createReview,adminProducts} = require('../controllers/product.js');
const {authenticationMid} = require('../middleware/auth.js')
const router = express.Router();

router.get('/products',allProducts)
router.get('/admin/products',authenticationMid,roleChecked,adminProducts)
router.get('/products/:id',detailProducts)
router.post('/products/new',authenticationMid,createProducts)
router.post('/products/newReview',authenticationMid,createReview)
router.delete('products/:id',authenticationMid,deleteProduct)
router.put('/products/:id',authenticationMid,updateProduct)




module.exports = router;