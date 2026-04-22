// Write an express.js script to print "The Pacific Ocean is the largest
// and deepest of the world ocean" also run on appropriate localhost.
const express = require('express');
const app = express();
app.get('/', (req, res) => {
    res.send("The Pacific Ocean is the largest and deepest of the world ocean");
});
app.listen(3000)