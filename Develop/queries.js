const connection = require('./database');

const viewAllDepartments = () => {
  connection.query('SELECT * FROM department', (err, results) => {
    if (err) throw err;
    console.table(results); // Display results in a formatted table
  });
};

const viewAllRoles = () => {
  connection.query('SELECT * FROM role', (err, results) => {
    if (err) throw err;
    console.table(results); // Display results in a formatted table
  });
};

const viewAllEmployees = () => {
  connection.query('SELECT * FROM employee', (err, results) => {
    if (err) throw err;
    console.table(results); // Display results in a formatted table
  });
};

const addDepartment = (departmentName) => {
  connection.query('INSERT INTO department (name) VALUES (?)', [departmentName], (err, results) => {
    if (err) throw err;
    console.log('Department added successfully');
  });
};

const addRole = (title, salary, departmentId) => {
  connection.query('INSERT INTO role (title, salary, department_id) VALUES (?, ?, ?)', [title, salary, departmentId], (err, results) => {
    if (err) throw err;
    console.log('Role added successfully');
  });
};

const addEmployee = (firstName, lastName, roleId, managerId) => {
  connection.query('INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)', [firstName, lastName, roleId, managerId], (err, results) => {
    if (err) throw err;
    console.log('Employee added successfully');
  });
};

module.exports = {
  viewAllDepartments,
  viewAllRoles,
  viewAllEmployees,
  addDepartment,
  addRole,
  addEmployee
};
