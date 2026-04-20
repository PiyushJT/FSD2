// PB 200 : You have been assigned to develop a user feedback form for a website
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
// After 10 seconds it will give message "no feedback available" message to user
// PB 200 : You have been assigned to develop a user feedback form for a website
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
// After 10 seconds it will give message "no feedback available" message to user
var express = require("express")
var app = express()
var cp = require("cookie-parser")
app.use(cp())
app.use(express.urlencoded())
app.get("/submit", (req, res) => {
    res.cookie("feedback", {
        name: req.query.name,
        email: req.query.email,
        message: req.query.message,
        rating: req.query.rating
    }, { expires: new Date(Date.now() + 10000) });
    res.send("Feedback submitted successfully!");
})
app.get("/feedback", (req, res) => {
    if (req.cookies.feedback) {
        res.send(`
            <h1>Feedback Details</h1>       
            <p>Name: ${req.cookies.feedback.name}</p>       
            <p>Email: ${req.cookies.feedback.email}</p> 
            <p>Message: ${req.cookies.feedback.message}</p> 
            <p>Rating: ${req.cookies.feedback.rating}</p>               
            <a href="/logout">Logout</a>
        `);
    }

    else {
        res.send("No feedback available.");
    }
})
app.get("/logout", (req, res) => {
    res.clearCookie("feedback");
    res.redirect("/");
})
app.listen(3000, () => {
    console.log("Server is running on http://localhost:3000");

})  

// or
// // PB 200 : You have been assigned to develop a user feedback form for a website
// // using Express.js and cookies. Implement the following requirements:
// //  Process a form with the following fields: Name, Email , Message , Rating
// // (radio buttons: Bad, Average, Good, Very Good, Excellent) When the user
// // submits the form, store their feedback information (name, email, message,
// // and rating) in a cookie named "feedback" that expires in 10 seconds.
// // Display a confirmation message to the user after successfully submitting the
// // form & Create a link to display the feedback details stored in the "feedback"
// // cookie. When the user click to the link, retrieve the feedback information
// // from the cookie and display it on the page also include a link on the
// // feedback details page to Logout. When the user clicks the link, user
// // redirected to home page. Make app.js file use get method in express js. No
// // need to write html file having form elements.
// // After 10 seconds it will give message "no feedback available" message to user
// var express = require("express")
// var app = express()
// var cp = require("cookie-parser")
// app.use(cp())
// app.use(express.urlencoded())
// app.get("/submit", (req, res) => {
//     res.cookie("feedback", {
//         name: req.query.name,   
//         email: req.query.email,
//         message: req.query.message,
//         rating: req.query.rating
//     }, { maxAge: 10000 })
//     res.send("Feedback submitted successfully!<br><a href='/feedback'>View Feedback</a>")
// })  
// app.get("/feedback", (req, res) => {
//     if (req.cookies.feedback) {
//         const feedback = req.cookies.feedback;  
//         res.send("Feedback Details:<br>" +
//             "Name: " + feedback.name + "<br>" +
//             "Email: " + feedback.email + "<br>" +   
//             "Message: " + feedback.message + "<br>" +
//             "Rating: " + feedback.rating + "<br>" +
//             "<a href='/logout'>Logout</a>")
//     } else {
//         res.send("No feedback available.<br><a href='/'>Go to Home</a>")
//     }   
// })
// app.get("/logout", (req, res) => {
//     res.clearCookie("feedback")
//     res.redirect("/")
// })  
    

