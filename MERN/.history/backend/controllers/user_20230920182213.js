const User = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken'); // jwt modülünün düzeltilmiş import'u

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
      return res.status(200).json({ message: "Şifre 6 karakterden küçük olamaz" });
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
      httpOnly: true,
      expires: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000) // Expires in 30 days
    };

    res
      .status(201)
      .cookie("token", token, cookieOptions)
      .json({
        newUser,
        token
      });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const login = async (req, res) => {
 const {email,password} = req.body;
 const user = await User.findOne({email})

 if(!user){
  return res.status(404).json({message:"böyle bir kullanıcı bulunamadı"})
 }
 const comparePassword = await bcrypt.compare(password,user.password)
 if(!comparePassword)

};

const logout = async (req, res) => {
  // Logout işlemleri
};

const forgotPassword = async (req, res) => {
  // Parola sıfırlama işlemleri
};

const resetPassword = async (req, res) => {
  // Parola sıfırlama işlemleri
};

module.exports = { register, forgotPassword, resetPassword, login, logout };
