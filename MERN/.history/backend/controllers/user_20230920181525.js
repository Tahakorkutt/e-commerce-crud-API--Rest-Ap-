
const User = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jwt');

const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Check if user already exists with the given email
    const user = await User.findOne({ email });
    if (user) {
      return res.status(200).json({ message: "Böyle bir kullanıcı zaten var" });
    }

    // Check password length
    if (password.length < 6) {
      return res
        .status(200)
        .json({ message: "Şifre 6 karakterden küçük olamaz" });
    }

    // Hash the password
    const passwordHash = await bcrypt.hash(password, 10);

    // Create a new user
    const newUser = await User.create({
      name,
      email,
      password: passwordHash
    });

    // Create a JWT token
    const token = jwt.sign({ id: newUser._id }, "SECRETTOKEN", {
      expiresIn: "1h"
    });
    const cookieOptions = {
      
    }

    res.status(201).json({
      newUser,
      token
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


const login = async (req,res)=>{
  
}

const logout = async (req,res)=>{
  
}

const forgotPassword = async (req,res)=>{
  
}

const resetPassword = async (req,res)=>{
  
}




module.exports = {register, forgotPassword, resetPassword,login,logout}