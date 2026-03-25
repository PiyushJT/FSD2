// write a node js program to load simple html file static on node js webserver and display it content and html content
var http = require("http");
var fs = require("fs");
var url = "http://localhost:6051/demo.html"
// fetch file name from url and read content of file and display in browser
var u = require("url");
var parsedUrl = u.parse(url, true);
process.noDeprecation = true;

var parsedUrlpath = parsedUrl.pathname
console.log(parsedUrlpath);  
filename = parsedUrlpath.split("/").pop();
console.log(filename);
http.createServer((req, res) => {
    if (req.url === "/") {
        file=(req.url === "/") ? filename : req.url;
        res.writeHead(200, { "Content-Type": "text/html" });
        fs.readFile(file,(err, data) => {
            if (err){
                res.writeHead(404, { "Content-Type": "text/plain" });
                res.end("Page Not Found");
            }
            res.end(data);
        });
    } else {
        res.writeHead(404, { "Content-Type": "text/plain" });
        res.end("Page Not Found");
    }           
}).listen(6051)