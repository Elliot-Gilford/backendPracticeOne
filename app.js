const express = require('express')
const app = express()
const bodyParser = require('body-parser')


app.use(bodyParser.raw());
app.use(bodyParser.json());
app.use(bodyParser.text());
app.use(bodyParser.urlencoded({ extended: true }));
app.use( express.static( "public" ) );


//anything defined in userController file will now be available in the app.js file if we call variable userController
let userController = require("./controller/userController")
//this is example route (endpoint)
app.get('/', function (req, res) {
  res.send('Hello World')
})


//method is get
//endpoint name is/user
app.get('/user', userController.getUserList)
app.post('/user', userController.createUser)  


//project will listen to 3000 ports (unique for the project) can run many ports on a server
app.listen(3000)