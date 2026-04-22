// Write an ExpressJS application that creates an HTML form
// containing two text fields named name and age, along with a submit
// button. When the user submits the form, the data should be sent using
// the GET method. After submission, the application should redirect to
// a new page and display the message:
// "Hello <name>, your age is <age>", where the values are taken from
// the form input
const express = require('express');
const app = express();  
app.use(express.urlencoded({ extended: true }));
app.get('/', (req, res) => {
    res.send("<h1>Enter Your Information</h1><form action='/submit' method='get'>Name: <input type='text' name='name'><br>Age: <input type='text' name='age'><br><button type='submit'>Submit</button></form>");
}); 
app.get('/submit', (req, res) => {
    const name = req.query.name;
    const age = req.query.age;
    res.send("<h1>Hello " + name + ", your age is " + age + "</h1>");
});
app.listen(3000)