// Write an ExpressJS application that creates a login form containing
// fields for username and password along with a submit button. The
// form data should be sent to the server using the POST method.
// Implement an authentication middleware that checks whether the
// entered username is "admin" and the password is "1234". If the
// credentials are correct, the application should display the message
// "Login Successful". Otherwise, it should display "Invalid
// Credentials"
const express = require('express');
const app = express();
app.use(express.urlencoded({ extended: true }));    
app.get('/', (req, res) => {
    res.send("<h1>Login Form</h1><form action='/login' method='post'>Username: <input type='text' name='username'><br>Password: <input type='password' name='password'><br><button type='submit'>Submit</button></form>");
});
app.post('/login', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    if (username === "admin" && password === "1234") {
        res.send("<h1>Login Successful</h1>");
    } else {
        res.send("<h1>Invalid Credentials</h1>");
    }
});