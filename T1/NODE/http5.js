// write node code to fetch  values from url and display output as  ask
// "http://www.google.com/exam.txt?c1=hello&c2=FSD2&c3=welcome to LJU #All thebest"
// 1. data must be wrirten in file exam.txt file name must be fetch from url 
// output : hello!
//          welcome to lju fsd2 t1 test 
//          #All thebest
// 2. read the content from file and send response to server and display data in "/" in same formate as output  but in h1 tag and in red color
// 3. if any other page is req it show page not found in palin text
var http = require("http");
var fs = require("fs");
var u= require("url");
var url="http://www.google.com/exam.txt?c1=hello&c2=FSD2&c3=welcome to LJU #All thebest";  
var parsedUrl = u.parse(url, true);
process.noDeprecation = true;
a=parsedUrl.query
parsedUrlpath = parsedUrl.pathname;
filename = parsedUrlpath.split("/").pop();
console.log(filename);
fs.writeFileSync(filename,a.c1+"!\n"+a.c2+" t1 test\n"+a.c3);
http.createServer((req, res) => {
    if (req.url === "/") {
        res.writeHead(200, { "Content-Type": "text/html" });
        fs.readFile(filename, "utf-8", (err, data) => {
            if (err) throw err;
            res.end("<h1 style='color:red'>" + "<pre>" + data + "</pre>" + "</h1>");
        });
    } else {
        res.writeHead(404, { "Content-Type": "text/plain" });
        res.end("Page Not Found");
    }       
}).listen(3125)