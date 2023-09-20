const express = require('express');

const router = express.Router();

const{register, forgotPassword, resetPassword, login, logout} = require('../controllers/product.js');
