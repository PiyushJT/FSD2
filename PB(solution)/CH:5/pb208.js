// create a user signup form using Express.js and cookies. Implement the following
// requirements:
// Create a form with the following fields:
// o Name (input field)
// o Email (input field)
// o Gender (radio buttons: Male, Female, Others)
// o Submit button
// When the user submits the form, store their information (name, email, gender) in a
// cookie named "registered" that expires in 15 seconds.
// Display a confirmation message to the user after successfully submitting the form &
// Create a link to display the details stored in the "registered" cookie.
// When the user clicks to the link, retrieve the information from the cookie and display
// it on the /details page also include a link on the /details page to Logout. When the
// user clicks the link, user redirected to home page.
// Use post method.
const express = require('express');
const cp = require('cookie-parser');
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(cp());
app.get('/', (req, res) => {    
    res.send(`
        <form action="/signup" method="post">
            Name: <input type="text" name="name" required><br><br>
            Email: <input type="email" name="email" required><br><br>   
            Gender  :                               
            <input type="radio" name    ="gender" value="Male" required>
            <label for="male">Male</label>
            <input type="radio" name="gender" value="Female" required>
            <label for="female">    Female</label>
            <input type="radio" name="gender" value="Others" required>
            <label for="others">Others</label><br><br>
            <button type="submit">Submit</button>
        </form>
    `);
});
app.post('/signup', (req, res) => {
    const { name, email, gender } = req.body;
    res.cookie('registered', { name, email, gender }, { maxAge: 15000 });
    res.send("<p>Registration successful!</p><a href='/details'>View Details</a> ");
}   );
app.get('/details', (req, res) => {
    const registered = req.cookies.registered;
    if (registered) {
        res.send("<p>Name: " + registered.name + "</p>" +
            "<p>Email: " + registered.email + "</p>" +
            "<p>Gender: " + registered.gender + "</p>" +
            "<a href='/logout'>Logout</a>");
    } else {
        res.send("<p>No registration details found.</p><a href='/'>Go to Signup</a>");
    }                   
});
app.get('/logout', (req, res) => {
    res.clearCookie('registered');
    res.redirect('/');
}); 
app.listen(3000)