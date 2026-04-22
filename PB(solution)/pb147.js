// write an express.js script to make one index.html file in this file we
// write simple heading tag and make one css file index.css put style
// using appropriate selector and link with js file and show output on
// localhost:3030
const express = require('express'); 
const app = express();
app.use(express.static(__dirname, { index: 'pb147.html' }));
app.listen(3030, () => {
    console.log("Server is running on http://localhost:3030");
});