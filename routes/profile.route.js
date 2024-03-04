const profileController = require('../controllers/profile.controller');
const auth = require('../auth/auth');
const express = require('express');
const profileRoute = express.Router();

profileRoute.get('/profile',auth,profileController.getProfile);


module.exports = profileRoute