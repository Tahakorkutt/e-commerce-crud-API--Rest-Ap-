
const user = require('../models/user');

const authenticationMid = async (req,res,next) => {
  const {token} = req.cookies
  if(!token)

}