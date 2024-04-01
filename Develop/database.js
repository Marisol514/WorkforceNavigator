// Importing the 'mysql2' library
const mysql = require('mysql2');

// Importing the 'dotenv' library for loading environment variables
const dotenv = require('dotenv');

// Loading environment variables from the .env file into process.env
dotenv.config();

// Creating a MySQL connection using 'mysql2' library
const connection = mysql.createConnection({
  host: 'localhost', // Hostname for the MySQL database server
  // 'dialect' property is not supported directly by 'mysql2', so it might not be needed
  // Assuming it's used for Sequelize, which is an ORM for MySQL, you might not need it here
  port: 3306, // Port number for the MySQL database server
  user: process.env.DB_USER, // Username for connecting to the database server (retrieved from environment variables)
  password: process.env.DB_PASSWORD, // Password for connecting to the database server (retrieved from environment variables)
  database: process.env.DB_NAME // Name of the MySQL database to connect to (retrieved from environment variables)
});

// Connecting to the MySQL database
connection.connect((err) => {
  if (err) throw err; // If an error occurs during connection, throw the error
  console.log('Connected to MySQL database'); // Log a message indicating successful connection
});

// Exporting the connection object to make it accessible in other modules
module.exports = connection;


