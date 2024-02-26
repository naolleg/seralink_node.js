const express = require("express");
const mysql = require("mysql");
const bodyParser = require("body-parser");
const router = express.Router();


router.get("/", function (req, res) {
    let filepath = __dirname + "/login.html";
    console.log(filepath);
    res.sendFile(filepath);
});
router.post("/", function (req, res) {
    console.log(req.body);
    let email = req.body.email;
    let password = req.body.password;
    let sql = "SELECT * FROM users WHERE email = '"+email+"' AND password = '"+password+"'";
         createConnection.query(sql, [email, password], function (err, result) {
             if (err) {
                console.log(err);
             }
             else if(result.length>0)
             {
              res.redirect("/home");
             }
             else{
               res.redirect("/");
             }
         })
})

module.exports=router;