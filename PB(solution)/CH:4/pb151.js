// using Express js make student information form only two fileds like
// name and mobile no and send data on console after submitting
// "submit" button
const express = require('express');
const app = express();
app.use(express.urlencoded({ extended: true }));
app.get('/', (req, res) => {
    res.send("<h1>Student Information Form</h1><form action='/submit' method='post'>Name: <input type='text' name='name'><br>Mobile No: <input type='text' name='mobile'><br><button type='submit'>Submit</button></form>");
});
app.post('/submit', (req, res) => { 
    console.log("Student Name:", req.body.name);    
    console.log("Mobile No:", req.body.mobile);
    res.send("Data received: Name - " + req.body.name + ", Mobile No - " + req.body.mobile);        
});
app.listen(3000)