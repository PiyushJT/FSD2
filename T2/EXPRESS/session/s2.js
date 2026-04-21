// write a script to meet folowing requirements:
// 1. create indexed.html file wich containt user name , password, login button and open in on local host after clikcing button it should jump on save page. store user name and password in session after saving redirect to fetch page and read value put a logout link here  jump on delete session page after clicking on logout link distroy the session and redirect to index.html file
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
    if (req.session.username && req.session.password) {
        res.send("Username: " + req.session.username + "<br>" +
            "Password: " + req.session.password + "<br>" +
            "<a href='/logout'>Logout</a>")
    } else {
        res.send("No session data available.<br><a href='/'>Go to Home</a>")
    }
})
app.get("/logout", (req, res) => {
    req.session.destroy();
    res.redirect("/");
})
app.listen(3000)