// src/models/db.js

const mysql = require('mysql2');

// Hard-code the database credentials here
const db = mysql.createConnection({
  host: 'localhost', // DB host
  user: 'gabtheinhinyero', // DB user
  password: 'gabtheinhinyero', // DB password
  port: '3306',
  database: 'greenhouse_dashboard' // DB name
});

// Connect to the database
db.connect((err) => {
  if (err) {
    console.error('MySQL connection error:', err);
    throw err;
  }
  console.log('MySQL connected...');
});

module.exports = db;
