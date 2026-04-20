var express = require("express")
var app = express()
var cp = require("cookie-parser")

app.use(cp())

app.get("/cookie", function(req, res){
    res.cookie("name","Express JS")
    res.cookie("fname","Zalak")
    res.cookie("lname","Bhatt")
    res.cookie("ID","1",{expires:new Date(Date.now()+10000)})
    res.cookie("email","z@gmail.com",{maxAge:2000})
    res.clearCookie("name")
    res.send(req.cookies)
})

app.listen(3000,function(){
    console.log("Server is running on http://localhost:3000")
})  
