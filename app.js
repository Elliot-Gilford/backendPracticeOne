const express = require('express')
const app = express()
const bodyParser = require('body-parser')


app.use(bodyParser.raw());
app.use(bodyParser.json());
app.use(bodyParser.text());
app.use(bodyParser.urlencoded({ extended: true }));
app.use( express.static( "public" ) );

// creating a const route which has the path for index file, then put this into place by doing app.use("".abc)
//route will pass whatever endpoint request comes through and check in routes/index file for it
// / indicates what we are looking for
const route = require("./routes/index");
const { application } = require('express');
app.use("/", route)


app.listen(3000)