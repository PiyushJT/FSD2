var express = require('express');
var app = express();
app.use(express.static(__dirname));
app.get('/process', function(req, res) {
    fname = req.query.fn;
    lname = req.query.ln;
    console.log(req.query);
    res.send('First Name: ' + fname + '<br>Last Name: ' + lname);
}   );
app.listen(3000, function() {
    console.log('Server is running on port 3000');
});