const express = require("express");
const mysql = require("mysql");
const bodyParser = require("body-parser");
const router = express.Router();

const createConnection = require("../config/dbconfig"); 

router.get("/", function (req, res) {
    let filepath = __dirname + "/seeker/signup/index.html";
    console.log(filepath);
    res.sendFile(filepath);
});

router.post("/", function (req, res) {
    let firstName = req.body.firstName;
    let lastName = req.body.lastName;
    let email = req.body.email;
    let password = req.body.password;


    let signup_sql = "INSERT INTO users(firstname,lastname,email,password) VALUES('"+firstName+"','"+lastName+"','"+email+"','"+password+"')";
    
    createConnection.query(signup_sql, [firstName, lastName, email, password], function (err, result) {
        if (err) {
            console.log(err);
        }
        else if(result.affectedRows>0)
        {
         res.redirect("/professionalprofile");
        }
        else{
          res.redirect("/signup");
          res.send("Something went wrong");
        }
    });
    
    
})
 
module.exports = router;