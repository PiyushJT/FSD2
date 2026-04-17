// write a express js script to print massage in next line spliting by dot and use get method submit data html file containts form of text area for the message and submit button and output in h1 tag
// input= hii.hello.how are you
// output= hii
//         hello
//         how are you
var express = require('express');
var app = express();
app.use(express.static(__dirname,{index:'index2.html'}));
app.get('/process', function (req, res) {
    var message = req.query.a;
    var lines = message.split('.');
    var output = lines.join('<br>');
    res.send('<h1>' + output + '</h1>');
});
app.listen(3000)