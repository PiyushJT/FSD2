var express = require('express');
var app = express();
app.get('/', (req, res) => {
    res.type("text/plain");
    res.send("<h1>Hello World!</h1>");
});
app.get('/about', (req, res) => {
    res.type("text/html");
    // res.write("<h1>About Page</h1>");
    res.send("<p>This is the about page.</p>");
});
app.listen(3000, () => {
    console.log("Server is running on port 3000");
});