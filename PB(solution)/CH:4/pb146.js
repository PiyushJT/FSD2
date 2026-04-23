// write an express.js script to use of routing method using home , about
// , contact , temp page and print message. /home- welcome to my home
// page , /about -welcome to my about page, /contact-welcome to my
// contact page ,/temp - welcome to my temp page
const express = require('express');
const app = express();
app.get('/', (req, res) => {
    res.send("Welcome to my home page");
});
app.get('/about', (req, res) => {
    res.send("Welcome to my about page");
});
app.get('/contact', (req, res) => {         
    res.send("Welcome to my contact page");
}   
);
app.get('/temp', (req, res) => {
    res.send("Welcome to my temp page");
});
app.listen(3000)