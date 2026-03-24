var http = require("http");
var fs = require("fs");
http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "image/png" });
    fs.readFile("image1212.png", (err, data) => {
        if (err) throw err;
        res.write(data);
        res.end();
    });
}).listen(3125)