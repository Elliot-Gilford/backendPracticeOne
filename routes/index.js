const express = require("express");
const router = express.Router();

const userRoute = require("./user/index")
const employeeRoute = require("../routes/employee/index")
const studentRoute = require("../routes/student/index")
// const emplyeeRoute = require()


// user is a highlevel route and all routes for user will be within the user file

//defining endpoint name, when endpoint get /user name will check into userRoute as have defined to look into that file.
// any further / information will then determine which route in user/index.js file

router.use("/user", userRoute)
router.use("/employee", employeeRoute)
router.use("/student", studentRoute)

// router.use("/employee", userRoute)


module.exports = router
