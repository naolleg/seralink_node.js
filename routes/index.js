const express = require('express');

const userRoute = require('./user.route')
const jobRoute = require('./job.route')
const loginRoutes =("./login.route");
const appRoute = express.Router();

appRoute.use(userRoute);
appRoute.use(jobRoute);



module.exports = appRoute;