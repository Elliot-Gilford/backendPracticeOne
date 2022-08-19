const express = require("express");
const router = express.Router();
const employeeController = require("../../controller/employeeController")


//adding crud options for employee

//list of employee
router.get('/', employeeController.getEmployee)

//create employee
router.post('/', employeeController.createEmployee)

//get employee details by id
router.get('/id/:id', employeeController.getEmployeeByID)

//delete employee by id
router.delete('/:id', employeeController.deleteEmployee)

//update employee details (patch)
router.patch('/:id', employeeController.updateEmployee)




//module in this file means any file writing. Module is the method for exporting.
//method allows us to export multiple methods at once
  module.exports = router