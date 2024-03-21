-- Sample Departments
INSERT INTO department (name) VALUES
('HR'),
('Finance'),
('Marketing'),
('IT'),
('Operations');

-- Sample Roles
INSERT INTO role (title, salary, department_id) VALUES
('HR Manager', 80000, 1),
('HR Assistant', 50000, 1),
('Finance Manager', 90000, 2),
('Finance Analyst', 60000, 2),
('Marketing Manager', 85000, 3),
('Marketing Specialist', 55000, 3),
('IT Manager', 95000, 4),
('Software Developer', 70000, 4),
('Operations Manager', 88000, 5),
('Operations Coordinator', 52000, 5);

-- Sample Employees
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES
('John', 'Doe', 1, NULL),
('Jane', 'Smith', 2, 1),
('Michael', 'Johnson', 3, NULL),
('Emily', 'Williams', 4, 3),
('David', 'Brown', 5, NULL),
('Sarah', 'Jones', 6, 5),
('Christopher', 'Miller', 7, NULL),
('Amanda', 'Davis', 8, 7),
('Matthew', 'Wilson', 9, NULL),
('Jennifer', 'Taylor', 10, 9);