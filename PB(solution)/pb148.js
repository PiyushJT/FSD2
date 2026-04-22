// write an express.js to implement a form that allows users to submit
// data via POST request. Write code to create a route that handles the
// POST request and logs the submitted data to the console
const express = require('express');
const app = express();
app.use(express.urlencoded({ extended: true }));
app.get('/', (req, res) => {
    res.send("<h1>Submit Data</h1><form action='/submit' method='post'><input type='text' name='data'><button type='submit'>Submit</button></form>");
});
app.post('/submit', (req, res) => {
    console.log("Submitted data:", req.body.data);
    res.send("Data received: " + req.body.data);
});
app.listen(3000)