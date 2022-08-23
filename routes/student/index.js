const express = require("express");
const router = express.Router();
const studentController = require("../../controller/studentController")

//adding crud options for student

//list of student
router.get('/', studentController.getStudent)

//create student
router.post('/', studentController.createStudent)

//get student details by id
router.get('/id/:id', studentController.getStudentByID)

//delete studentby id
router.delete('/:id', studentController.deleteStudent)

//update student details (patch)
router.patch('/:id', studentController.updateStudent)

module.exports = router