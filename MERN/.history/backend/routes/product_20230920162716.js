const express = require('express');

const{allProducts,detailProducts,createProducts,deleteProduct,updateProduct} = require('../controllers/product.js');

const router = express.Router();

router.get('/products',allProducts)
router.get('/products/:id',updateProduct)
router.post('/products/new',createProducts)
router.delete('/products/new',createProducts)



module.exports = router;