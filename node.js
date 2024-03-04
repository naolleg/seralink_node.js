const express = require("express");
const mysql = require("mysql");
const bodyParser = require("body-parser");


const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

const loginroute=require("./routes/login");
const signuproute=require("./routes/signup");
const professionalProfile=require("./routes/pr_profile");
const homeroute=require("./routes/home");
const dbconfig = require("./config/dbconfig");



const PORT=process.env.PORT || 3033;

app.listen(PORT, function () {
    console.log(`Server listening on port ${PORT}`);
});


const createConnection = dbconfig;