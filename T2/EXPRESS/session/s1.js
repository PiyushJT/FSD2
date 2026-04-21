// write a express js using session to display how many time a user visited a website if user visiting a website for the first time then display "welcome thank you for visiting our website" else display the count how many time user visited the website for that particular session 
const express = require('express');
const session = require('express-session');
const app = express();
app.use(session({
    secret: 'lju123',
    resave: true,
    saveUninitialized: true 
}));
app.get('/', (req, res) => {
    if (req.session.views) {
        req.session.views++;
        res.send(`You have visited this page ${req.session.views} times.`);
    } else {
        req.session.views = 1;
        res.send('Welcome! Thank you for visiting our website.');
    }
});
app.listen(3000)
