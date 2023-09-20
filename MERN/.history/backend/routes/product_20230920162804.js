const express = require('express');

const{allProducts,detailProducts,createProducts,deleteProduct,updateProduct} = require('../controllers/product.js');

const router = express.Router();

router.get('/products',allProducts)
router.get('/products/:id',detailProducts)
router.post('/products/new',createProducts)
router.delete('deleteProduct',deleteProduct)

router.put('/products/new',createProducts)



module.exports = router;