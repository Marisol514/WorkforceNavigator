// Importing the connection object from the './database' module
const connection = require('./database');

// Function to view all departments
const viewAllDepartments = () => {
  // Querying the database to select all departments
  connection.query('SELECT * FROM department', (err, results) => {
    if (err) throw err; // If an error occurs during the query, throw the error
    console.table(results); // Displaying the results in a formatted table
  });
};

// Function to view all roles
const viewAllRoles = () => {
  // Querying the database to select all roles
  connection.query('SELECT * FROM role', (err, results) => {
    if (err) throw err; // If an error occurs during the query, throw the error
    console.table(results); // Displaying the results in a formatted table
  });
};

// Function to view all employees
const viewAllEmployees = () => {
  // Querying the database to select all employees
  connection.query('SELECT * FROM employee', (err, results) => {
    if (err) throw err; // If an error occurs during the query, throw the error
    console.table(results); // Displaying the results in a formatted table
  });
};

// Function to add a department
const addDepartment = (departmentName) => {
  // Querying the database to insert a new department
  connection.query('INSERT INTO department (name) VALUES (?)', [departmentName], (err, results) => {
    if (err) throw err; // If an error occurs during the query, throw the error
    console.log('Department added successfully'); // Logging a success message
  });
};

// Function to add a role
const addRole = (title, salary, departmentId) => {
  // Querying the database to insert a new role
  connection.query('INSERT INTO role (title, salary, department_id) VALUES (?, ?, ?)', [title, salary, departmentId], (err, results) => {
    if (err) throw err; // If an error occurs during the query, throw the error
    console.log('Role added successfully'); // Logging a success message
  });
};

// Function to add an employee
const addEmployee = (firstName, lastName, roleId, managerId) => {
  // Querying the database to insert a new employee
  connection.query('INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)', [firstName, lastName, roleId, managerId], (err, results) => {
    if (err) throw err; // If an error occurs during the query, throw the error
    console.log('Employee added successfully'); // Logging a success message
  });
};

// Exporting the functions to make them accessible in other modules
module.exports = {
  viewAllDepartments,
  viewAllRoles,
  viewAllEmployees,
  addDepartment,
  addRole,
  addEmployee
};

