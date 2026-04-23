// write a sript to meet foll requirements.
// 1) create index.html page and open it on localhost
// 2) after clicking submit button, it should jump to
// savesessionpage.store username in session.
// 3) After saving session, redirect to fetchsession page and read session
// value. put a logout link button here.
// 4) destroy the session on this page and redirect to index.html
var express = require("express")
var app = express()
var session = require("express-session")
app.use(session({
    secret: 'lju123',
    resave: true,
    saveUninitialized: true
}));
app.use(express.static(__dirname, { index: 'pb197.html' }));
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