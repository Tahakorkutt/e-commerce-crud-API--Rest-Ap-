
const user = require('../models/user');
const jwt = require('jsonwebtoken');

const authenticationMid = async (req,res,next) => {
  const {token} = req.cookies
  if(!token){
    return res.status(500).json({message:"Erişim için lütfen giriş yapın"})
  }
  const decodedData = jwt.verify(token,"SECRETTOKEN")
  if(!decodedData){
    return res.status(500).json({message:"Erişim için lütfen giriş yapın"})
  }
  const decodedData = jwt.verify(token,"SECRETTOKEN")

}