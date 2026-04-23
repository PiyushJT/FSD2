// Write an ExpressJS REST API script to create an array of JSON objects named
// employee_data having properties:
// Emp_id
// Name
// Department
// Salary
// Experience
// When the user requests:
// /employees → It should display all employees data.
// /employees/:id → It should display data of the employee whose Emp_id matches the
// given id.
// Example:
// /employees/3 → Display data of employee with Emp_id 3
const express = require('express');
const app = express();
const employee_data = [         
    { Emp_id: 1, Name: 'Alice', Department: 'HR', Salary: 50000, Experience: 5 },       
    { Emp_id: 2, Name: 'Bob', Department: 'IT', Salary: 60000, Experience: 3 },
    { Emp_id: 3, Name: 'Charlie', Department: 'Finance', Salary: 55000, Experience: 4 },
];
app.get('/employees', (req, res) => {
    res.json(employee_data);
});

app.get('/employees/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const employee = employee_data.find(e => e.Emp_id === id);
    if (employee) {
        res.json(employee);
    } else {
        res.status(404).json({ message: 'Employee not found' });
    }
});
app.listen(3000)