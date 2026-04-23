// Write expressJS script to perform task as asked:
// (A) Create one HTML file which contains text-field named
// username, one dropdown which contains options of country like
// India, USA, Canada, Australia. & one submit button.
// (B) Once user clicked on submit button it will jump to next page than
// username & You are from “country name” which ever selected from
// drop box should be printed.
// (C) Use get method to request data.
const express = require('express');
const app = express();  
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname, { index: 'pb159.html' }));
app.get('/submit', (req, res) => {
    const username = req.query.username;  
    const country = req.query.country;
    res.send("<h1>Username: " + username + "</h1><h2>You are from " + country + "</h2>");
});
app.listen(3000)  