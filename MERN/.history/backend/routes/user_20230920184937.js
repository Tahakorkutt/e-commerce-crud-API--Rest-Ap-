const express = require('express');

const router = express.Router();

const{register, forgotPassword, resetPassword, login, logout} = require('../controllers/user.js');

router.post('/register',register)
router.post('/register',register)

