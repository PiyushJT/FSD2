// Write an expressJS code which loads login.html file upon browsing
// localhost:3010. The Login.html file contains input for
// username,password and two checkboxes named remember and
// subscribe,on submitting the file it should go to /data page where
// username,password and selected checkboxes are pinted,in addition to
// that a logout button should be there,onclicking this button it should
// go back to home page “localhost:3010/”.(GET/POST any method can
// be used)[Write all necessary files code]
const express = require('express');
const app = express();
app.use(express.urlencoded({ extended: true }));    
app.use(express.static(__dirname, { index: 'pb153.html' }));
app.post('/data', (req, res) => {
    const username = req.body.username;
    const password = req.body.password; 
    const remember = req.body.remember ? "Remember me" : "Don't remember me";
    const subscribe = req.body.subscribe ? "Subscribed" : "Not subscribed";
    res.send("<h1>Data Received</h1><p>Username: " + username + "</p><p>Password: " + password + "</p><p>" + remember + "</p><p>" + subscribe + "<br><a href='/'>Logout</a></p>");
});
app.listen(3010)