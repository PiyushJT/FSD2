// write an express.js script to load an HTML file having username and
// password and submit button. On clicking submit button. It should
// jump on "check" page using "POST" method. If username is "admin"
// , then jump on next middleware to print "welcome… admin" , if
// username is not "admin" , then stay on same middleware to print
// "warning msg" in red color.
const express = require('express');
const app = express();
app.use(express.urlencoded({ extended: true }));
const checkUser = (req, res, next) => {
  if (req.body.uname === "admin") {
    next();
  } else {
    res.send("<h2 style='color:red;'>Warning: Incorrect User!</h2>");
  }
};
app.get('/', (req, res) => {
    res.send("<h1>Login</h1><form action='/check' method='post'>Username: <input type='text' name='username'><br>Password: <input type='password' name='password'><br><button type='submit'>Submit</button></form>");
});

app.post("/check", checkUser, (req, res) => {
  res.send("<h1>Welcome... admin</h1>");
});
app.listen(3000)