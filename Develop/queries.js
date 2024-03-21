const connection = require('./database');

const viewAllDepartments = () => {
  // Perform SELECT query to fetch all departments and display them
};

const viewAllRoles = () => {
  // Perform SELECT query to fetch all roles and display them
};

const viewAllEmployees = () => {
  // Perform SELECT query to fetch all employees and display them
};

const addDepartment = () => {
  // Prompt user for department name and INSERT it into the database
};

const addRole = () => {
  // Prompt user for role details and INSERT it into the database
};

const addEmployee = () => {
  // Prompt user for employee details and INSERT it into the database
};

const updateEmployeeRole = () => {
  // Prompt user to select an employee and their new role, then UPDATE it in the database
};

module.exports = {
  viewAllDepartments,
  viewAllRoles,
  viewAllEmployees,
  addDepartment,
  addRole,
  addEmployee,
  updateEmployeeRole
};
