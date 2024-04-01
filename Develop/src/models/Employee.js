/**
 * Represents an Employee in the application.
 */
class Employee {
  /**
   * Creates a new Employee instance.
   * @param {number} id - The unique identifier for the employee.
   * @param {string} first_name - The first name of the employee.
   * @param {string} last_name - The last name of the employee.
   * @param {number} role_id - The role identifier of the employee.
   * @param {number} manager_id - The manager identifier of the employee.
   */
  constructor(id, first_name, last_name, role_id, manager_id) {
    this.id = id;
    this.first_name = first_name;
    this.last_name = last_name;
    this.role_id = role_id;
    this.manager_id = manager_id;
  }
}

module.exports = Employee;

  