// Write an ExpressJS to take a UserName, Password, Textarea for
// “message” & submit
// button using get method.
// 1) After clicking submit button the content of submitted details
// should be represented on “/login” page along with one “show vowel”
// link.
// 2) By clicking “show vowel” link count of vowel used in submitted
// “message” will display on “/message” page. (Use next() to route
// page
// give easy code and make middleware 
const express = require('express');
const app = express();
app.use(express.urlencoded({ extended: true }));
app.get('/', (req, res) => {    
    res.send("<h1>Login</h1><form action='/login' method='get'>Username: <input type='text' name='username'><br>Password: <input type='password' name='password'><br>Message: <textarea name='message'></textarea><br><button type='submit'>Submit</button></form>");           
});
app.get('/login', (req, res) => {
    const username = req.query.username;
    const password = req.query.password;
    const message = req.query.message;
    res.send("Username: " + username + "<br>Password: " + password + "<br>Message: " + message + "<br><a href='/message?message=" + encodeURIComponent(message) + "'>Show Vowel</a>");
});
app.get('/message', (req, res) => {
    const message = req.query.message;
    const vowels = message.match(/[aeiouAEIOU]/g);
    const vowelCount = vowels ? vowels.length : 0;
    res.send("Message: " + message + "<br>Number of vowels: " + vowelCount);
});
app.listen(3000, () => {
    console.log("Server is running on port 3000");
});