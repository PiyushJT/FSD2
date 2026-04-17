var express = require('express');       
var app = express();
//Route parameters 
app.get('/calender/:day/event/:ename', (req, res) => {
    res.send(req.params);
});
app.listen(3000, () => {
    console.log("Server is running on port 3000");
});