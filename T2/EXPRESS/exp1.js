var express = require('express');
var app = express();    
app.get('/', (req, res) => {
    res.set("Content-Type", "text/plain");
    // res.type("text/plain");
    // res.setHeader("Content-Type", "text/plain");
    res.send("Hello World!");
});      
app.listen(3000);
// app.listen(port,[hostname],[backlog],[callback]) 
// dif between url and uri
// url: http://localhost:3000/hello?name=John#section1
// uri: /hello?name=John#section1