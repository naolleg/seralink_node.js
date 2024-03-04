const userService = require("../services/user.service") 
const next = (req, res, next) => {
    console.log("next");}
const profileController = {
    
    getProfile: async (req,next, res) => {
        
        const data = await userService.getProfile();
        res.status(200).json(data);
    }
}
module.exports = profileController