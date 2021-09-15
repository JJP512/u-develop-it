const mysql = require("mysql2");

// Connect to database
const db = mysql.createConnection(
    {
        host: "localhost",
        user: "root",
        password: "Buma7873?",
        database: "election"
    },
    console.log("connected to the election database.")
);

module.exports = db;