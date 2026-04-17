// writa a express js file. 
// 1.html form with user name , password and submit button. use post method 
// 2.on visiting / show the form 
// 3.on submitting to login page if user name  is admin display welcome admin else show please login with admin name and a link back to the form 
var express = require('express');
var app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname, { index: 'index4.html' }));
app.post('/', function (req, res) {
    var username = req.body.username;
    var password = req.body.password;
    if (username === "admin") {
        res.send("Welcome... admin");
    }
    else {
        res.send("Please login with admin name!" + "<br><a href='/'>Back to Login</a>");
    }
}); 
app.listen(3000)    