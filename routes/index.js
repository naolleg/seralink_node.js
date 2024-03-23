const express = require('express');

const userRoute = require('./user.route')
const jobRoute = require('./job.`route')
const loginRoutes =require("./login.route");
const profileRoute = require("./profile.route");
const appRoute = express.Router();

appRoute.use(userRoute);
appRoute.use(jobRoute);
appRoute.use(loginRoutes);
appRoute.use(profileRoute);

module.exports = appRoute;