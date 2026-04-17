employee = {
    name: "John Doe",
    age: 30,
    designation: "Software Engineer"
};
const e = require('express');
var express = require('express');
var app = express();    
app.get('/', (req, res) => {
    // res.type("application/json");
    res.send(employee);
});
app.get('/about', (req, res) => {
    // res.type("text/html");
    res.write("<h1>About Employee</h1><p> " + employee.designation +" "+
employee.name+ " is "+ employee.age+ " years old  " + ".</p>");
res.send();
});
app.get('/contact', (req, res) => {
    res.type("text/plain");
    res.send(employee.name );
});
app.listen(3000, () => {
    console.log("Server is running on port 3000");
});