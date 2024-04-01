// Importing the 'inquirer' library for handling user input
const inquirer = require('inquirer');

// Importing functions from './queries' module
const {
  viewAllDepartments,
  viewAllRoles,
  viewAllEmployees,
  addDepartment,
  addRole,
  addEmployee,
  updateEmployeeRole
} = require('./queries');

// Defining the main menu function
const mainMenu = () => {
  // Prompting the user with a list of actions using inquirer
  inquirer.prompt({
    name: 'action',
    type: 'list',
    message: 'What would you like to do?',
    choices: [
      'View all departments',
      'View all roles',
      'View all employees',
      'Add a department',
      'Add a role',
      'Add an employee',
      'Update an employee role',
      'Exit'
    ]
  }).then((answer) => {
    // Handling user's choice with a switch statement
    switch (answer.action) {
      case 'View all departments':
        // Calling the function to view all departments
        viewAllDepartments();
        // Returning to the main menu after completing the action
        return backToMainMenu();
      case 'View all roles':
        // Calling the function to view all roles
        viewAllRoles();
        // Returning to the main menu after completing the action
        return backToMainMenu();
      case 'View all employees':
        // Calling the function to view all employees
        viewAllEmployees();
        // Returning to the main menu after completing the action
        return backToMainMenu();
      case 'Add a department':
        // Calling the function to add a department
        addDepartment();
        // Returning to the main menu after completing the action
        return backToMainMenu();
      case 'Add a role':
        // Calling the function to add a role
        addRole();
        // Returning to the main menu after completing the action
        return backToMainMenu();
      case 'Add an employee':
        // Calling the function to add an employee
        addEmployee();
        // Returning to the main menu after completing the action
        return backToMainMenu();
      case 'Update an employee role':
        // Calling the function to update an employee role
        updateEmployeeRole();
        // Returning to the main menu after completing the action
        return backToMainMenu();
      case 'Exit':
        // Displaying a goodbye message
        console.log('Goodbye!');
        // Exiting the process
        process.exit();
      default:
        // Displaying an error message for invalid choices
        console.log('Invalid choice');
        // Returning to the main menu after handling the invalid choice
        return backToMainMenu();
    }
  });
};

// Function to prompt the user to return to the main menu or exit
const backToMainMenu = () => {
  inquirer.prompt({
    name: 'back',
    type: 'confirm',
    message: 'Would you like to return to the main menu?',
    default: true
  }).then((answer) => {
    if (answer.back) {
      // Returning to the main menu if the user chooses to go back
      mainMenu();
    } else {
      // Displaying a goodbye message if the user chooses to exit
      console.log('Goodbye!');
      // Exiting the process
      process.exit();
    }
  });
};

// Calling the mainMenu function to start the application
mainMenu();

