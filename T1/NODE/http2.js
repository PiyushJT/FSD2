var http = require("http");
var fs = require("fs");
http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(req.url);
    res.end();  
}).listen(3125);