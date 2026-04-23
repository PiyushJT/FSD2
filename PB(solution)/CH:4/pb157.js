// Write an ExpressJS to take a UserName, Password, Textarea for
// “message” & submit
// button using get method.
// 1) After clicking submit button the content of submitted details
// should be represented on “/login” page along with one “show vowel”
// link.
// 2) By clicking “show vowel” link count of vowel used in submitted
// “message” will display on “/message” page. (Use next() to route
// page)
const express = require('express');
const app = express();
app.use(express.urlencoded({ extended: true }));
app.get('/', (req, res) => {
    res.send("<h1>Login</h1><form action='/login' method='get'>Username: <input type='text' name='uname'><br>Password: <input type='password' name='password'><br>Message: <textarea name='message' rows='4' cols='50'></textarea><br><button type='submit'>Submit</button></form>");
});
app.get('/login', (req, res) => {
    const username = req.query.uname;
    const message = req.query.message;
    res.send("<h1>Welcome, " + username + "</h1><p>Your message: " + message + "</p><a href='/message?message=" + encodeURIComponent(message) + "'>Show Vowel Count</a>");
});
app.get('/message', (req, res,next) => {
    const message = req.query.message;
    if (!message) {
        res.send("<h1>No message provided!</h1><a href='/'>Go back</a>");
        return;
    }else{  next(); }
  
});
app.get('/message', (req, res) => {
    const message = req.query.message;
    const vowelCount = (message.match(/[aeiouAEIOU]/g) || []).length;
    res.send("<h1>Vowel Count</h1><p>The number of vowels in your message is: " + vowelCount + "</p><a href='/'>Go back</a>");
}   );
app.listen(3000)
