// write a script to meet following requirements:
// • Create session.html file page which contains form(username,password,login button). and open it on
// localhost.
// • After clicking submit button, it should jump on “save” page. Store username and password in
// session.
// • After saving session, redirect to “fetchdata” page and read value. On this page check authentication
// of user. User name and password must be “admin” and “admin@123” respectively.
// o If this condition is true then display welcome admin and display logout link on this
// page(fetchdata).
// ▪ By clicking on logout link user should jump to “destroy” page and destroy the session
// there and display the message “Session destroyed”. And give the link of “login” under
// that message. By clicking that link user will be redirected to the home page.
// o Else display “Please enter valid username and password” and login link on this
// page(fetchdata).
var express = require("express")
var app = express()
var session = require("express-session")
app.use(session({   
    secret: 'lju123',
    resave: true,
    saveUninitialized: true 
}));    
app.use(express.static(__dirname, { index: 'index10.html' }));
app.use(express.urlencoded())   
app.post("/save", (req, res) => {
    req.session.username = req.body.username;
    req.session.password = req.body.password;
    res.redirect("/fetch")
})
app.get("/fetch", (req, res) => {
    if (req.session.username === "admin" && req.session.password === "admin@123") {
        res.send("Welcome Admin!<br><a href='/logout'>Logout</a>")
    } else {
        res.send("Please enter valid username and password.<br><a href='/'>Login</a>")
    }
})  
app.get("/logout", (req, res) => {
    req.session.destroy();
    res.send("Session destroyed.<br><a href='/'>Login</a>")
})
app.listen(3000)