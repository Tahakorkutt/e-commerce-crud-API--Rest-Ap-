
const User = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jwt');

const register = async (req,res)=>{

  const {name,email,password} = req.body;
  const user = await User.findOne(email)
  if(user){
     return res.status(200).json({message: "Böyle bir kullanıcı zaten var"})
  }

  const passwordHash = await bcrypt.hash(password,10)
  if(passwordHash.length < 6){
    return res.status(200).json({message: "Şifre 6 karakter den küçük olamaz"})
  }
  const newUser = awant User.create({name,email,password:passwordHash})

  const token = await jwt.sign(newUser)

  res.status(201).json({
    newUser,
    token
  })


}

const login = async (req,res)=>{
  
}

const logout = async (req,res)=>{
  
}

const forgotPassword = async (req,res)=>{
  
}

const resetPassword = async (req,res)=>{
  
}




module.exports = {register, forgotPassword, resetPassword,login,logout}