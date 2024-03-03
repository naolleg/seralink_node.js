const loginController = require("../controllers/login.controller");
const express = require("express");
const loginRoute = express.Router();
loginRoute.post("/login", loginController.loginUser);

module.exports = loginRoute;