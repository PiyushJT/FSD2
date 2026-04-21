// Write express js script to perform following tasks.
// 1. Create one html file which contains one text field for name, email field and checkbox for subscription.
// Html file will be loaded on home page. Email and name fields are required fields.
// 2. On login page welcome user and email id data should be printed.
// a. If user checked the subscription then “Thank you for the subscription” message will be printed
// and “logout” link will be displayed under the message. If user clicks logout link then he/she will
// be redirected to the home page.
// b. If user has not opted for the subscription then “You can subscribe to get daily updates” message
// will be printed and “subscribe” link will be displayed under the message.
// c. If user clicks subscribe link then he/she will be redirected to the subscription page. In this page
// “Thank you for the subscription” message will be printed and “logout” link will be displayed
// under the message. If user clicks logout link then he/she will be redirected to the home page.
// Use concept of the middleware and you can use any of http methods(get/post).
const express = require('express');
const session = require('express-session');
const app = express();
app.use(session({   
    secret: 'lju123',
    resave: true,
    saveUninitialized: true
}));    
app.use(express.static(__dirname, { index: 'index11.html' }));
app.use(express.urlencoded())
app.post("/submit", (req, res) => {
    req.session.name = req.body.name;
    req.session.email = req.body.email;
    req.session.subscription = req.body.subscription === "on";
    res.redirect("/welcome")
})
app.get("/welcome", (req, res) => {
    const name = req.session.name;
    const email = req.session.email;
    const subscription = req.session.subscription;
    let message = `Welcome ${name}! Your email is ${email}.<br>`;
    if (subscription) {
        message += "Thank you for the subscription!<br><a href='/logout'>Logout</a>";
    }
    else {
        message += "You can subscribe to get daily updates.<br><a href='/subscribe'>Subscribe</a>";
    }   
    res.send(message);
})
app.get("/subscribe", (req, res) => {
    req.session.subscription = true;
    res.send("Thank you for the subscription!<br><a href='/logout'>Logout</a>");
})  
app.get("/logout", (req, res) => {
    req.session.destroy();
    res.redirect("/");
})
app.listen(3000)