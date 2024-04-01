/**
 * Represents a role in the application.
 */
class Role {
  /**
   * Creates a new Role instance.
   * @param {number} id - The unique identifier for the role.
   * @param {string} title - The title of the role.
   * @param {number} salary - The salary associated with the role.
   * @param {number} department_id - The department identifier associated with the role.
   */
  constructor(id, title, salary, department_id) {
    this.id = id;
    this.title = title;
    this.salary = salary;
    this.department_id = department_id;
  }
}

module.exports = Role;
