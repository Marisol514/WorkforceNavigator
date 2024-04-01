-- Sample Departments
INSERT INTO department (name) VALUES
('HR'), -- Inserting a department with name 'HR'
('Finance'), -- Inserting a department with name 'Finance'
('Marketing'), -- Inserting a department with name 'Marketing'
('IT'), -- Inserting a department with name 'IT'
('Operations'); -- Inserting a department with name 'Operations'

-- Sample Roles
INSERT INTO role (title, salary, department_id) VALUES
('HR Manager', 80000, 1), -- Inserting a role named 'HR Manager' with salary 80000 and department_id 1 (HR)
('HR Assistant', 50000, 1), -- Inserting a role named 'HR Assistant' with salary 50000 and department_id 1 (HR)
('Finance Manager', 90000, 2), -- Inserting a role named 'Finance Manager' with salary 90000 and department_id 2 (Finance)
('Finance Analyst', 60000, 2), -- Inserting a role named 'Finance Analyst' with salary 60000 and department_id 2 (Finance)
('Marketing Manager', 85000, 3), -- Inserting a role named 'Marketing Manager' with salary 85000 and department_id 3 (Marketing)
('Marketing Specialist', 55000, 3), -- Inserting a role named 'Marketing Specialist' with salary 55000 and department_id 3 (Marketing)
('IT Manager', 95000, 4), -- Inserting a role named 'IT Manager' with salary 95000 and department_id 4 (IT)
('Software Developer', 70000, 4), -- Inserting a role named 'Software Developer' with salary 70000 and department_id 4 (IT)
('Operations Manager', 88000, 5), -- Inserting a role named 'Operations Manager' with salary 88000 and department_id 5 (Operations)
('Operations Coordinator', 52000, 5); -- Inserting a role named 'Operations Coordinator' with salary 52000 and department_id 5 (Operations)

-- Sample Employees
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES
('John', 'Doe', 1, NULL), -- Inserting an employee named 'John Doe' with role_id 1 and no manager (NULL)
('Jane', 'Smith', 2, 1), -- Inserting an employee named 'Jane Smith' with role_id 2 and manager_id 1 (John Doe)
('Michael', 'Johnson', 3, NULL), -- Inserting an employee named 'Michael Johnson' with role_id 3 and no manager (NULL)
('Emily', 'Williams', 4, 3), -- Inserting an employee named 'Emily Williams' with role_id 4 and manager_id 3 (Michael Johnson)
('David', 'Brown', 5, NULL), -- Inserting an employee named 'David Brown' with role_id 5 and no manager (NULL)
('Sarah', 'Jones', 6, 5), -- Inserting an employee named 'Sarah Jones' with role_id 6 and manager_id 5 (David Brown)
('Christopher', 'Miller', 7, NULL), -- Inserting an employee named 'Christopher Miller' with role_id 7 and no manager (NULL)
('Amanda', 'Davis', 8, 7), -- Inserting an employee named 'Amanda Davis' with role_id 8 and manager_id 7 (Christopher Miller)
('Matthew', 'Wilson', 9, NULL), -- Inserting an employee named 'Matthew Wilson' with role_id 9 and no manager (NULL)
('Jennifer', 'Taylor', 10, 9); -- Inserting an employee named 'Jennifer Taylor' with role_id 10 and manager_id 9 (Matthew Wilson)
