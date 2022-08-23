
const getStudent = (req,res) => {
    let studentList = [{id: "1", studentCode: "student1"}, {id: "2", studentCode: "employee2"}]

    res.send({
        status: true,
        students: studentList,
        message: "student info shared"
    }

    )
}


const getStudentByID = (req,res) => {
    const {id} = req.params
    
    res.send({
        status: true,
        student: req.params,
        message: "get student details for student id"
    }

    )
}

const createStudent = (req,res) => {
    let {
        id, studentCode
    } = req.body

    res.send({
        status: true,
        //update this for array
        student: req.body,
        message: "create student Successfully"
    })
}

const deleteStudent = (req, res) => {

    const {id} = req.params

res.send({
  status: true,
  student: id,
  message: "student deleted"
})

}


const updateStudent = (req,res) => {

    const {id} = req.params

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