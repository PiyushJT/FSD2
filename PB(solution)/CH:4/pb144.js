// write an express.js script to load an HTML file having username and
// password and submit button. On clicking submit button. It should
// jump on "check" page using "POST" method. If username is "admin"
// , then jump on next middleware to print "welcome… admin" , if
// username is not "admin" , then stay on same middleware to print
// "warning msg" in red color.
const express = require('express');
const app = express();
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send("<h1>Login</h1><form action='/check' method='post'>Username: <input type='text' name='uname'><br>Password: <input type='password' name='password'><br><button type='submit'>Submit</button></form>");
});
app.post("/check", (req, res, next) => {
  const username = req.body.uname;
    if (username === "admin") { 
        next();
    } else {
        res.send("<h1 style='color:red;'>Warning: Invalid username!</h1><a href='/'>Go back</a>");
    }       
});
app.post("/check", (req, res) => {
  res.send("<h1>Welcome... admin</h1>");
});
app.listen(3000)
