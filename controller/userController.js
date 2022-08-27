const con = require("../config")

//method getUserList
//arrow method created constant as variable and then create funciton. Always then needs arrow method
const getUserList = async (req, res) => {

    let { userId, email } = req.query
    let response = []
    //empty array = let name = []
    //empty object = let name = {}
    con.query("select * from User", function (err, result, fields) {
        console.log("see query result", result)
        Object.keys(result).forEach(function (key) {
            let row = result[key]
            response.push(row)
            console.log("showing number of each row in forEach", row)
        })
        res.send({
            status: true,
            user: response,
            message: "userList Shared Successfully2"
        })
    })
}

//create a new user
const createUser = (req, res) => {
    console.log("logging user post req body", req.body)
    //userList is array with 2 objects
    let {
        firstName, lastName, email, password, confirmPassword
    } = req.body

    //access variable inside string with backtick do ${}
    let sqlQuery =
        // `INSERT INTO User(Id, firstName, lastName, email) VALUES (null, "Priyank", "Priyank", "ppanchal912@gmail.com")`
        `INSERT INTO User(Id, firstName, lastName, email) VALUES (null, "${firstName}", "${lastName}", "${email}")`
        // `INSERT INTO User(Id, firstName, lastName, email) VALUES (0, ${firstName}, ${lastName}, ${email})`

    con.query(sqlQuery, function (error, result) {
        console.log("error seen is:", error)
        console.log("result seen is:", result)
        res.send({
            status: true,
            //update this for array
            user: req.body,
            message: "create User Successfully"
        })
    })
}


// const createUser = (req, res) => {
// console.log("logging user post req body", req.body)
//     //userList is array with 2 objects
//     let {
//         firstName, lastName, email, password, confirmPassword
//     } = req.body
//     res.send({
//         status: true,
//         user: {
//             firstName, lastName, email, password,confirmPassword
//         },
//         message: "create User Successfully"
//     })

// } 



exports.getUserList = getUserList
exports.createUser = createUser