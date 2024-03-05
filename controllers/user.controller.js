const UserService  = require("../services/user.service")
const bcrypt = require("bcrypt");
const UserController = {
  createUser: async (req,res)=>{
    try {
      const {
        email,
        password,
        role,
        firstname,
        lastname,
        image  
      } = req.body;
      if( !email ||
        !password ||
        !role ||
        !firstname ||
        !lastname ||
        !image  ){
          return res.status(400).json({
            success: false,
            message: "All fields are required"
          })
        }
        const isUserExist = await UserService.getUserByEmail(email);
        console.log(isUserExist);
        if(isUserExist.length>0){
          return res.status(400).json({
            success: false,
            message: "this email is registered before"
          })
        }
        //add constant for the salt
        const saltRounds = 10
        const salt = bcrypt.genSaltSync(saltRounds);
        req.body.password = bcrypt.hashSync(password,salt);
        
        const isUserRegistered = await UserService.insertUserTable(req.body);
        console.log(isUserRegistered.insertId);
        if(isUserRegistered){
          return res.status(200).json({
            success: true,
            message: "user registered successfully"
          })
        }

        

  
      
    } catch (error) {
      throw error
    }


  },
  updateUser: (req,res)=>{},
  deleteUser: (req,res)=>{},
  getUsers: async (req,res)=>{
    const result = await UserService.getAllusers();
   // console.log(result);
    return res.status(200).json({
        success: true,
        data: result
    })
  },
  getsingleUsers: async (req,res)=>{
    const id = req.params.id.substring(1);
    const result = await UserService.getSinglelusers(id);
    if(result.length>0){
      return res.status(200).json({
        success: true,
        data: result
      })
    }
    else{
      return res.status(400).json({
        success: false,
        message: "no user is found"
      })
    }

  },
}

module.exports = UserController;