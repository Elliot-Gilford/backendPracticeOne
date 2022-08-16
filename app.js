const express = require('express')
const app = express()

//this is example route (endpoint)
app.get('/', function (req, res) {
  res.send('Hello World')
})


//method is get
//endpoint name is/user
app.get('/user', function (req, res) {
    res.send( {
        status: true,
        user: [],
        message: "get user list"

    }
    )

  })
  


//project will listen to 3000 ports (unique for the project) can run many ports on a server
app.listen(3000)