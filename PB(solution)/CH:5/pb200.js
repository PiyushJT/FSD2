// You have been assigned to develop a user feedback form for a website
// using Express.js and cookies. Implement the following requirements:
//  Process a form with the following fields: Name, Email , Message , Rating
// (radio buttons: Bad, Average, Good, Very Good, Excellent) When the user
// submits the form, store their feedback information (name, email, message,
// and rating) in a cookie named "feedback" that expires in 10 seconds.
// Display a confirmation message to the user after successfully submitting the
// form & Create a link to display the feedback details stored in the "feedback"
// cookie. When the user click to the link, retrieve the feedback information
// from the cookie and display it on the page also include a link on the
// feedback details page to Logout. When the user clicks the link, user
// redirected to home page. Make app.js file use get method in express js. No
// need to write html file having form elements.
const express = require('express');
const cp = require('cookie-parser');
const app = express();
app.use(cp());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname, { index: 'pb200.html' }));
app.get('/submit', (req, res) => {
    const name = req.query.name;
    const email = req.query.email;
    const message = req.query.message;
    const rating = req.query.rating;
    res.cookie('feedback', { name, email, message, rating }, { maxAge: 10000 });
    res.send("<h1>Feedback submitted successfully!</h1><a href='/feedbackpage'>View Feedback</a>");
});
app.get('/feedbackpage', (req, res) => {
    const feedback = req.cookies.feedback;
    if (feedback) {
        res.send("<h1>Feedback Details</h1>" +
            "<p>Name: " + feedback.name + "</p>" +
            "<p>Email: " + feedback.email + "</p>" +
            "<p>Message: " + feedback.message + "</p>" +
            "<p>Rating: " + feedback.rating + "</p>" +
            "<a href='/logout'>Logout</a>");
    } else {
        res.send("<h1>No feedback found!</h1><a href='/'>Go to Home</a>");
    }   
});
app.get('/logout', (req, res) => {
    res.clearCookie('feedback');
    res.redirect('/');
});
app.listen(3000)