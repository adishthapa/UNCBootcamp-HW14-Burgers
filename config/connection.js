require("dotenv").config();
var keys = require("./keys.js");
var mysql = require("mysql");

var connection = mysql.createConnection({
    host: keys.mySQLKeys.mysql_host,
    port: keys.mySQLKeys.mysql_port,
    user: keys.mySQLKeys.mysql_user,
    password: keys.mySQLKeys.mysql_password,
    database: "burgers_db"
});

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

module.exports = connection;