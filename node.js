const express = require("express");
const mysql = require("mysql");
const bodyParser = require("body-parser");
const app = express();


app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
    let filepath = __dirname + "/login.html";
    console.log(filepath);
    res.sendFile(filepath);
});
app.get("/signup", function (req, res) {
    let filepath = __dirname + "/seeker/signup/index.html";
    console.log(filepath);
    res.sendFile(filepath);
});
app.get("/home", function (req, res) {
    let filepath = __dirname + "/seeker/index.html";
    console.log(filepath);
    res.sendFile(filepath);
});
app.get("/professionalprofile", function (req, res) {
let filepath = __dirname + "/seeker/professionalprofile/index.html";
console.log(filepath);
res.sendFile(filepath);
});


app.listen(1276, function () {
    console.log("Server listening on port 1252");
});

let createConnection = mysql.createConnection({
    host: "localhost",
    user: "job",
    password: "1234",
    database: "jsp"
});

createConnection.connect(function (err) {
    if (err) {
        console.log(err);
    } else {
        console.log("Connected to the database");
    }
});
// app.post("/signup", function (req, res) {
//     console.log(req.body);
// })
app.post("/", function (req, res) {
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
app.post("/signup", function (req, res) {
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
app.post("/professionalprofile", function (req, res) {
    let gender = req.body.gender;
    let skill_message = req.body.skill_message;
    let summary = req.body.summary;
    let cv_pdf_path = req.body.cv_pdf_path;
    let city = req.body.city;
    let region = req.body.region;
    let prof_sql="INSERT INTO professionalProfile (gender, skill_message, summary, cv_pdf_path) VALUES ('"+gender+"','"+skill_message+"','"+summary+"','"+cv_pdf_path+"')";
    let add_sql="INSERT INTO address (city, region) VALUES ('"+city+"','"+region+"')";

    createConnection.query(prof_sql, [gender, skill_message, summary, cv_pdf_path], function(err, result) {
        if (err) {
          console.log(err);
        } else {
          createConnection.query(add_sql, [city, region], function(err, result) {
            if (err) {
              console.log(err);
            } else {
              res.redirect("/home");
            }
          });
        }
      });
})