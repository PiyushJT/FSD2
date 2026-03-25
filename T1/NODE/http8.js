// create http webpage on wich home page display welcome to login page in blue color and font size must be 32 pixel login page show one html file from static url having form with detail for username , password , submit and reset button , galary page reflect one image hello.jpg and anyoher page show page not found 
var http = require("http");
var fs = require("fs");
var u = require("url");
http.createServer((req, res) => {
    if (req.url === "/") {
        res.writeHead(200, { "Content-Type": "text/html" });   
        res.end("<h1 style='color:blue; font-size:32px'>Welcome to Login Page</h1><hr> <a href='/login.html'>Login</a> <br> <a href='/gallery'>Gallery</a>");
    } else if (req.url === "/login.html") {
        res.writeHead(200, { "Content-Type": "text/html" });
        fs.readFile("login.html", (err, data) => {
            if (err) throw err;
            res.end(data);
        });
    } else if (req.url === "/gallery") {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end("<h1>Gallery Page</h1><hr><img src='hello.jpg' alt='Hello Image'>");
    }   else if (req.url === "/hello.jpg") {
        res.writeHead(200, { "Content-Type": "image/jpeg" });       
        fs.readFile("hello.jpg", (err, data) => {       
            if (err) throw err; 
            res.end(data);  
        }); 
    } else {        
                        
        res.writeHead(404, { "Content-Type": "text/plain" });       
        res.end("Page Not Found");
    }       
}).listen(3125) 