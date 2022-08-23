const res = require("express/lib/response");

// const getUserList = (req, res) => {
//     console.log("params being passed in get user url", req.query)
//         //userList is array with 2 objects
//         let userList = [ {firstName: "Elliot", lastName: "Gilford"}, {firstName: "Barnaby", lastName: "Gilford"} ]
//         let { userId, email} = req.query
       
//         res.send({
//             status: true,
//             user: userId,
//             message: "userList Shared Successfully"
//         })
    
//     } 

const getEmployee = (req,res) => {
    let employeeList = [{id: "1", employeeCode: "employee1"}, {id: "2", employeeCode: "employee2"}]

    res.send({
        status: true,
        employees: employeeList,
        message: "employee info shared"
    }

    )
}

const getEmployeeByID = (req,res) => {
    const {id} = req.params
    
    res.send({
        status: true,
        employee: req.params,
        message: "get employee details for employee id"
    }

    )
}


const createEmployee = (req,res) => {
    let {
        id, employeeCode
    } = req.body
    res.send({
        status: true,
        //update this for array
        employee: req.body,
        message: "create Employee Successfully"
    })
}

const deleteEmployee = (req, res) => {

    const {id} = req.params

res.send({
  status: true,
  employee: id,
  message: "employee deleted"
})

}


// we pull 
const updateEmployee = (req,res) => {

    const {id} = req.params

    res.send({
        status: "true",
        employee: id,
        employeeDetails: req.body.employeecode,
        message: "employee details updated"

    })

}

exports.getEmployee = getEmployee
exports.createEmployee = createEmployee
exports.getEmployeeByID = getEmployeeByID
exports.deleteEmployee = deleteEmployee
exports.updateEmployee = updateEmployee