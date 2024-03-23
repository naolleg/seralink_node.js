const express = require('express');
const userRoute = express.Router();

const UserController = require('../controllers/user.controller')

//request 
userRoute.get('/admin/users',UserController.getUsers )
// userRoute.get('/admin/users/:id',UserController.getsingleUsers)ssss
userRoute.post('/signup',upload.single("image"),UserController.createUser)
// userRoute.post('/admin/addprovider',UserController.createprovider)
// userRoute.delete('/admin/users/:id',UserController.deleteUser)
// userRoute.put('/api/user/:id',UserController.updateUser)



module.exports = userRoute;