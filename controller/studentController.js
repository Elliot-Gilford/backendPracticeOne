const { on } = require("../config")
const con = require("../config")


//Get list of all students
const getStudent = (req, res) => {
    let studentList = [{ id: "1", studentCode: "student1" }, { id: "2", studentCode: "employee2" }]
    let response = []
    con.query("select * from Student", (error, response, field) => {
        Object.keys(result).forEach(function (key) {
            let row = result[key]
            response.push(row)
        })
    })
    res.send({
        status: true,
        students: response,
        message: "student info shared"
    })
}

//Get Details For One Student
const getStudentByID = (req, res) => {
    const { id } = req.params
    con.query(`select * from Student where id = "${id}"`, (error, studentIdResp, field) => {
    })
    console.log('log studentIdResp', studentIdResp)
    res.send({
        status: true,
        student: studentIdResp,
        message: "get student details for student id"
    })
}

//Add A New Student
const createStudent = (req, res) => {
    let {
        id, studentCode
    } = req.body
    //note how '' vs `` on field names stopped entry
    con.query(`INSERT INTO Student(id, studentCode) VALUES (null, "${studentCode}")`, function (errorCS, responseCS, fieldCS) {
        console.log('log error if error with create student:', errorCS)
        console.log('log result if student created:', responseCS)
    })
    res.send({
        status: true,
        student: req.body,
        message: "create student Successfully"
    })
}

//Delete a student
const deleteStudent = (req, res) => {
    const { id } = req.params
    con.query(`DELETE FROM Student WHERE id = "${id}"`, (error, results, fields) => {
        console.log("errror:", error),
        console.log("result", results),
        console.log("deleted student", id)
    })
    res.send({
        status: true,
        student: id,
        message: "student deleted"
    })
}

//Update a student
const updateStudent = (req, res) => {
    const { id } = req.params
    con.query(`UPDATE Student SET studentCode = "four" WHERE id = ${id}`, (error, result2) => {
        console.log("errror:", error),
        console.log("result", result2)
        // console.log("deleted student", id)
        // UPDATE `Student` SET `studentCode` = 'three' WHERE `Student`.`id` = 3;
        // `UPDATE Student SET studentCode = four WHERE id = 3`
        // `DELETE FROM Student WHERE id = "${id}"`
    })
    res.send({
        status: "true",
        student: id,
        studentDetails: req.body.studentCode,
        message: "student details updated"
    })
}

exports.getStudent = getStudent
exports.createStudent = createStudent
exports.getStudentByID = getStudentByID
exports.deleteStudent = deleteStudent
exports.updateStudent = updateStudent