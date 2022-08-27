const res = require("express/lib/response");
const con = require("../config")

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


//Get list of all employees
const getEmployee = async (req, res) => {
    let employeeList = [{ id: "1", employeeCode: "employee1" }, { id: "2", employeeCode: "employee2" }]
    let response = []
    //updating for employee
    con.query("select * from Employee", (err, result, fields) => {
        console.log("see query result", result)
        Object.keys(result).forEach(function (key) {
            let row = result[key]
            response.push(row)
            console.log("showing number of each row in forEach", row)
        })
        res.send({
            status: true,
            employee: response,
            message: "employee info retrieved successfully3"
        })
    })
}

//Get Details For Specific Employee
const getEmployeeByID = (req, res) => {
    const { id } = req.params
    con.query("select * from Employee where Id = 4", (error, employeeIdResult, fields) => {
        console.log("show employee id result log:", employeeIdResult)
        res.send({
            status: true,
            employee: employeeIdResult,
            message: "get employee details for employee id"
        })
    })
}

//Add New Employee
const createEmployee = (req, res) => {
    let {
        Id, employeeCode
    } = req.body

    let response = []
    let sqlQuery =
        // `INSERT INTO User(Id, firstName, lastName, email) VALUES (null, "Priyank", "Priyank", "ppanchal912@gmail.com")`
        `INSERT INTO Employee(Id, employeeCode) VALUES (null, "${employeeCode}")`

    con.query(sqlQuery, async function (error, result) {
        console.log("error seen is:", error)
        console.log("result seen is:", result)
        await con.query("select * from Employee", (empError, empResult) => {
            console.log("see query result", empResult[0])
            //object keys would allow us to filter out and remove specific elements if we wanted like with certain email
            Object.keys(empResult).forEach(function (key) {
                let row = empResult[key]
                response.push(row)
                console.log("showing number of each row in forEach", row)
            })
            console.log(response)
            res.send({
                status: true,
                employee: empResult,
                message: "employee info added and retrieved successfully"
            })
        })
    })
}

//Delete Employee
const deleteEmployee = (req, res) => {

    const { id } = req.params

    con.query(`DELETE FROM Employee WHERE Id = ${id}`,(error,result) => {
        console.log("error log:", error),
        console.log("result", result)
    })

    res.send({
        status: true,
        employee: id,
        message: "employee deleted"
    })

}


//Update Employee Code
const updateEmployee = (req, res) => {

    const { id } = req.params

    con.query(`UPDATE Employee SET employeeCode="Employee Four" WHERE Id= "${id}"`, (error, updateEmployeeRes, field) => {
        console.log("updated row for employee changes log:", updateEmployeeRes)
    }
    )
    res.send({
        status: "true",
        employee: id,
        employeeDetails: req.body.employeecode,
        message: "employee details updated2"
    })
}

exports.getEmployee = getEmployee
exports.createEmployee = createEmployee
exports.getEmployeeByID = getEmployeeByID
exports.deleteEmployee = deleteEmployee
exports.updateEmployee = updateEmployee