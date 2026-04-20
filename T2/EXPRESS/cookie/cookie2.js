var express = require("express");
var app = express();
var cp = require("cookie-parser");
app.use(cp());
app.use(express.static(__dirname, { index: 'index8.html' }));
app.use(express.urlencoded())
app.post("/next", (req, res, next) => {
    res.cookie("fname", req.body.fname);
    res.cookie("password", req.body.password)
    res.cookie("lname", req.body.lname);
    res.redirect("/admin");
})
app.get("/admin", (req, res) => {
    res.clearCookie('lname');
    res.write(" Welcome : " + req.cookies.fname);
    res.write(" Lname : " + req.cookies.lname);
    res.write(" Password : " + req.cookies.password);
    res.send()
});

app.listen(3000)