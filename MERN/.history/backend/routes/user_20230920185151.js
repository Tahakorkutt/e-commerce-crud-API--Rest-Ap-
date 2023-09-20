const express = require('express');

const router = express.Router();

const{register, forgotPassword, resetPassword,updatePassword, login, logout} = require('../controllers/user.js');

router.post('/register',register)
router.post('/update-password',register)

router.post('/login',login)
router.get('/login',logout)

