const express = require('express');
const router = express.Router();
const { register, forgotPassword, resetPassword, updatePassword, login, logout ,userDetail} = require('../controllers/user.js');
const { authenticationMid}
router.post('/register', register);
router.post('/update-password', updatePassword);
router.post('/login', login);
router.post('/logout', logout); // Changed to POST method for logging out
router.post('/forgotPassword', forgotPassword); // Changed to POST method for logging out
router.post('/reset/:token', resetPassword); // Changed to POST method for logging out
router.post('/me', userDetail); // Changed to POST method for logging out

module.exports = router;
