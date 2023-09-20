const express = require('express');

const{allProducts,detailProducts,createProducts,deleteProduct,updateProduct} = require('../controllers/product.js');

const router = express.Router();

router.get('/products',allProducts)
router.put('/products/:id',updateProduct)
router.post('/products',createProductst)



module.exports = router;