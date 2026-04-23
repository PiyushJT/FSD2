// write express script to maintain session and print how many times
// user visit the page. For ex., if user visit first time ,”you have visited
// page First time” message will print. if user visit second time ,”you
// have visited page second time” message will print. and so on
var express = require("express")
var app = express()
var session = require("express-session")
app.use(session({
    secret: 'lju123',
    resave: true,
    saveUninitialized: true
}));
app.get("/", (req, res) => {
    if (req.session.views) {
        req.session.views++;
        res.send("You have visited the page " + req.session.views + " times");
    } else {
        req.session.views = 1;
        res.send("You have visited the page first time");
    }   
})
app.listen(3000)