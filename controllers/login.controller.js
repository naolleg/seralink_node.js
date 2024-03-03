const loginService = require("../services/login.service");
const userService = require("../services/user.service");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const loginController = {
  loginUser: async (req, res) => {
    console.log("dsfafsgdfsaedfsdc");
    try {
      const { email,password } = req.body;

      // Check if all fields are given
      if (!email || !password) {
        return res.status(400).json({
          success: false,
          message: "All fields are required",
        });
      }

      // Check if email is used before
      const isEmailExist = await userService.getUserByEmail(req.body);

      // If there is no account related to this email
      if (!isEmailExist.length) {
        return res.status(404).json({
          success: false,
          message: "No account exists with this email",
        });
      }

      // If the account exists, check for password
      req.body.userId = isEmailExist[0].userId;
      const isUserPasswordExist = await loginService.getUserPasswordByUserId(
        req.body
      );
      const dbPassword = isUserPasswordExist[0].password;

      // Compare user password with db password
      const isMatch = bcrypt.compareSync(password, dbPassword);
      if (!isMatch) {
        return res.status(400).json({
          success: false,
          message: "Incorrect password",
        });
      } else {
        //Extracting first name and user role
        const userInfo = await loginService.getUserRoleAndFirstName(req.body);
        console.log(userInfo);
        const firstname = userInfo[0].firstName;
        const role = userInfo[0].role;
        const userId = req.body.userId;

        //Prepare token
        const token = jwt.sign(
          { userId, role, firstname },
          process.env.JWT_SECRET,
          {
            // expiresIn: '1h',
          }
        );
        console.log(token);

        return res.status(200).json({
          // token,
          success: true,
          message: "Login successfully",
        });
      }
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: error.message,
      });
    }
  },
};

module.exports = loginController;