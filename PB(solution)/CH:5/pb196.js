// Process a form using post method. Form has fields like username,
// password, confirm password, gender, submit and reset buttons. After
// entering all fields, If password and confirm password matches, then
// form should be processed and all relevant and selected fields’ values
// should be printed. Otherwise, by printing warning message in red
// color, it should terminate. No need to write file having form
// elements
const express = require('express');
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname,{index:'pb196.html'}));
app.post('/submit', (req, res) => {
    if (req.body.password === req.body.confirmPassword) {
        res.send("Form submitted successfully!<br>" +
            "Username: " + req.body.username + "<br>" +"Gender: " + req.body.gender);
    } else {
        res.send("<h1 style='color:red;'>Warning: Passwords do not match!</h1>");
    }                       
});
app.listen(3000)