
const user = require('../models/user');
const jwt = require('jsonwebtoken');

const authenticationMid = async (req,res,next) => {
  const {token} = req.cookies
  if(!token){
    return res.status(500).json({message:"Erişim için lütfen giriş yapın"})
  }
  const decodedData = jwt.verify(token,"SECRETTOKEN")

  if(!decodedData){
    return res.status(500).json({message:"Erişim tokenı geçersizdir"})
  }
  req.user = await User.findById(decodedData.id)
  next();



}

const roleChecked = (...roles) => {
  return (req,res,next )=>{
    if(!roles.includes(req.user.role){
      return res.status(500).json({message:"Eri"})
    }

  }

}

module.exports = {authenticationMid,roleChecked}