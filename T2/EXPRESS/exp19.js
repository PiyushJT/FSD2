// write a express js to perform following task
// 1. Create one HTML file which contains two number type input fields, one dropdown which contains
// options like (select, addition, subtraction, multiplication, division) and one submit button.
// 2. The input fields must contain the value greater than 0 else it will give a message “Please enter the
// valid number”. Also, user must select any of the formula from the dropdown else give a message “You
// have not selected any formula”. (Message will be displayed on “/calc” page.)
// 3. If one formula is selected and numbers are entered then respective calculations will be performed on
// the page “/calc”.
// 4. Use get method to request data.
var express = require('express');
var app = express();
app.use(express.static(__dirname, { index: 'index3.html' }));
app.get("/calc", (req, res) => {
    res.set("content-type", "text/html");
    var n1 = parseInt(req.query.n1);
    var n2 = parseInt(req.query.n2);
    if ((n1 > 0) && (n2 > 0)) {
        if (req.query.formula == "addition") {
            a = n1 + n2;
            res.write("<h1>Addition is : " + a + "</h1>");
        }
        else if (req.query.formula == "subtraction") {
            s = n1 - n2;
            res.write("<h1>Subtraction is : " + s + "</h1>");
        }
        else if (req.query.formula == "multi") {
            m = n1 * n2;
            res.write("<h1>Multiplication is : " + m + "</h1>");
        }
        else if (req.query.formula == "div") {
            d = n1 / n2;
            res.write("<h1>Division is : " + d + "</h1>");
        }
        else {
            res.write("<h1>You have not selected any formula.</h1>");
        }
    } else {
        res.write("<h1>Please enter the valid number/s.</h1>");
    }
    res.send()
})
app.listen(6012);