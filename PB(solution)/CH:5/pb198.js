// Write a script to meet following requirement using ExpressJS.
// 1. Create index.html which contains login page having fields like
// Username, Password & Gender. Open it on localhost.
// 2. After clicking on submit button, it should jump to savesession
// page. store username & gender in session.
// 3. After saving session, redirect to fetchsession page and read session
// values. Put a logout link button here.
// 4. After clicking logout button, it jumps to deletesession page.
// 5. Destroy the session on this page & redirect to index.html page.
var express = require("express")
var app = express()
var session = require("express-session")
app.use(session({   
    secret: 'lju123',
    resave: true,
    saveUninitialized: true
}));
app.use(express.static(__dirname, { index: 'pb198.html' }));
app.use(express.urlencoded())   
app.post("/save", (req, res) => {
    req.session.username = req.body.username;
    req.session.gender = req.body.gender;
    res.redirect("/fetch")
})
app.get("/fetch", (req, res) => {
    if (req.session.username && req.session .gender) 
        {       
        res.send("Username: " + req.session.username + "<br>" + 
            "Gender: " + req.session.gender + "<br>" +
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