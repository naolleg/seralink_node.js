const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();

const userService = require('../services/user.service.js');
const isAdmin = async (req,res,next)=>{
    try {
     const response = await userService.getRoleUsingUserId(req.userId);
     if(!response && !response.length > 0 &&  !(response[0].role ==='admin')){
        return res.status(403).json({
           success: false,
           message: 'you have no privilage'
        })
     }else{
        next();
     }
  
    } catch (error) {
     console.log(error);
     res.status(500).json({ success: false, message: err.message });
    }
  
  }
module.exports = isAdmin  


const auth = (req, res, next) => {
   try {
      const token = req.headers['x-access-token'];
      if (!token) {
         return res.status(404).json({
            success: false,
            message: "no token is found"
         });
      } else {
         const verified = jwt.verify(token, process.env.JWT_SECRET);
         if (!verified) {
            return res.status(400).json({
               success: false,
               message: "invalid token"
            });
         } else {
            req.userId = verified.userId;
            next();
         }
      }
   } catch (error) {
      res.status(500).json({ success: false, message: error.message });
   }
};

module.exports = auth;