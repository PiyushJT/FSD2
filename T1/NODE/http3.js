var http = require("http");
var fs = require("fs");
http.createServer((req, res) => {
    if (req.url === "/") {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end("<h1>Welcome to the Home Page</h1> <img src='image1212.png' alt='Image'>");
    } else if (req.url === "/image1212.png") {
        res.writeHead(200, { "Content-Type": "image/png" });
        fs.readFile("image1212.png", (err, data) => {
            if (err) throw err;
            res.write(data);
            res.end();
        });
    }
}).listen(3125)