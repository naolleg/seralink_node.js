const express = require('express');
const userRoute = express.Router();

const UserController = require('../controllers/user.controller')

//request 
userRoute.get('/api/user',UserController.getUsers )
userRoute.get('/api/user/:id',UserController.getsingleUsers)
userRoute.post('/api/user',UserController.createUser)
userRoute.delete('/api/user/:id',UserController.deleteUser)
userRoute.put('/api/user/:id',UserController.updateUser)



module.exports = userRoute;