// write an express.js script to print "hello World" also run on
// localhost:4000 
const express = require('express');
const app = express();
app.get('/', (req, res) => {
    res.send("Hello World");
});
app.listen(4000, () => {
    console.log("Server is running on http://localhost:4000");
});