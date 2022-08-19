
//method getUserList
const getUserList = (req, res) => {
console.log("params being passed in get user url", req.query)
    //userList is array with 2 objects
    let userList = [ {firstName: "Elliot", lastName: "Gilford"}, {firstName: "Barnaby", lastName: "Gilford"} ]
    let { userId, email} = req.query
   
    res.send({
        status: true,
        user: userId,
        message: "userList Shared Successfully"
    })

} 

const createUser = (req, res) => {
    console.log("logging user post req body", req.body)
        //userList is array with 2 objects
        let {
            firstName, lastName, email, password, confirmPassword
        } = req.body
        res.send({
            status: true,
            //update this for array
            user: req.body,
            message: "create User Successfully"
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