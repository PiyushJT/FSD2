// Write an express.js script to define 2 pages. 1st page has username
// and password. Store this username to cookie on 2nd page. Cookie
// must stay live for 1 day.
var express = require("express")
var cp = require("cookie-parser")
var app = express()
app.use(cp())
app.get("/", (req, res) => {
    res.send(`<form action="/setcookie" method="post">
                <input type="text" name="username" placeholder="Username" required>
                <input type="password" name="password" placeholder="Password" required>
                <button type="submit">Submit</button>
              </form>`)
})
app.use(express.urlencoded())
app.post("/setcookie", (req, res) => {
    res.cookie("username", req.body.username, { maxAge: 24 * 60 * 60 * 1000 });
    res.send("Cookie set for username: " + req.body.username);
})
app.listen(3000)
