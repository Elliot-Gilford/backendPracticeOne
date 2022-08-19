const express = require("express");
const router = express.Router();
const userController = require("../../controller/userController")

//using express router package for get request
  router.get('/', userController.getUserList)

  //example with url parameter
  router.get('/:id', userController.getUserList)
  router.get('age/:age', userController.getUserList)
  router.post('/', userController.createUser)
  


//module in this file means any file writing. Module is the method for exporting.
//method allows us to export multiple methods at once
  module.exports = router
