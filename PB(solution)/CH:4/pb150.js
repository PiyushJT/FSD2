// write an express js to link html , css and js file and show one image
// o.jpg. And also show the description of image. 
const express = require('express');
const app = express();
app.use(express.static(__dirname,{index:'pb150.html'}));
app.listen(3000, () => {
    console.log("Server is running on http://localhost:3000");
});