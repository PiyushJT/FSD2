// Write express js script to perform tasks as asked below.
// 1. Create one HTML file which contains two number type input
// fields, one dropdown which contains options to select like (addition,
// subtraction, multiplication, division) and one submit button.
// 2. The input fields must contain the value greater than 0 else it will
// give a message “Please enter the valid number”. Also, user must
// select any type of formula from the dropdown else give a message
// “You have not selected any formula”. (Message will be displayed on
// “/calc” page.)
// 3. If one formula is selected and numbers are entered then Both
// numbers should be stored in cookies which expires in 50 seconds.
// Respective calculations will be performed on the page “/calc”.
var express = require("express")
var cp = require("cookie-parser")
var app = express() 
app.use(cp())
app.use(express.static(__dirname, { index: 'pb203.html' }))
app.use(express.urlencoded())
app.post("/calc", (req, res) => {
    const num1 = parseInt(req.body.num1);
    const num2 = parseInt(req.body.num2);
    const operation = req.body.operation;
    if (isNaN(num1) || isNaN(num2) || num1 <= 0 || num2 <= 0) {
        res.send("Please enter the valid number.<br><a href='/'>Go to Home</a>");
        return;
    }   
    if (!operation) {
        res.send("You have not selected any formula.<br><a href='/'>Go to Home</a>");
        return;
    }     
    res.cookie("num1", num1, { maxAge: 50000 });
    res.cookie("num2", num2, { maxAge: 50000 });    
    let result;
    if (operation === "addition") {
        result = num1 + num2;
    } else if (operation === "subtraction") {
        result = num1 - num2;
    } else if (operation === "multiplication") {
        result = num1 * num2;
    } else if (operation === "division") {
        result = num2 !== 0 ? num1 / num2 : "Cannot divide by zero";
    }   
    res.send("Result: " + result + "<br><a href='/'>Go to Home</a>");
})
app.listen(3000)   
    