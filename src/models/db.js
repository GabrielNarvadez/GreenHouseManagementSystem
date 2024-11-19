// src/models/db.js

const mariadb = require('mariadb');
require('dotenv').config();

console.log('DB_HOST:', process.env.DB_HOST);
console.log('DB_USER:', process.env.DB_USER);
console.log('DB_PASSWORD:', process.env.DB_PASSWORD);
console.log('DB_NAME:', process.env.DB_NAME);

// Create a pool of connections (recommended for MariaDB)
const pool = mariadb.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  connectionLimit: 5 // Limit to 5 concurrent connections
});

// Test the connection
pool.getConnection()
  .then(conn => {
    console.log('Connected to MariaDB');
    conn.release(); // Release the connection back to the pool
  })
  .catch(err => {
    console.error('MariaDB connection error:', err);
  });

// Export the pool for use in other parts of your app
module.exports = pool;
