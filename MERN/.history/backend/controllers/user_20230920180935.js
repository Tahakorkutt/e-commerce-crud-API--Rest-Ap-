
const User = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jwt');

const register = async (req,res)=>{

  const {name,email,password} = req.body;
  const user = await User.findOne(email)
  if(user){
     return res.status(200).json({message: "Böyle bir kullanıcı zaten var"})
  }

  const passwordHash = await bcrypt.hash

  

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