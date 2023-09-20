const express = require('express');
const router = express.Router();
const { register, forgotPassword, resetPassword, updatePassword, login, logout } = require('../controllers/user.js');

router.post('/register', register);
router.post('/update-password', updatePassword);
router.post('/login', login);
router.post('/logout', logout); // Changed to POST method for logging out

module.exports = router;
