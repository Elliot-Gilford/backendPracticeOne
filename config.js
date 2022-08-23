var mysql = require('mysql');


//root is default user and in local host root will have no password
//will change these config when with AWS
var con = mysql.createConnection({
  host: "localhost",
  database: "backendPracticeDB",
  user: "root",
  password: ""
});

con.connect(function(err) {
  if (err) throw err;
  console.log("DB connected sucessfully!");
});  

//con is the variable con created in line 3
module.exports = con