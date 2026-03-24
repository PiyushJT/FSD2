// write node js script to print query string of url in url.txt file using callback function
var fs = require("fs");
var url = require("url");
// 1.write a url as a object in url.txt file
a1=url.parse("https://localhost:8080/path/to/resource?name=JohnDoe&year=2025", true);
fs.writeFile("url.txt", JSON.stringify(a1), (err)=>{
    if (err) throw err
    console.log("url.txt file created");
    fs.readFile("url.txt", "utf-8", (err, data)=>{
        if (err) throw err
        var urlObject = JSON.parse(data);
        console.log(urlObject.query);
    })
})
// 2.write a url as a string in url1.txt file
a2=url.parse("https://localhost:8080/path/to/resource?name=JohnDoe&year=2025", false);
fs.writeFile("url1.txt", a2, (err)=>{
    if (err) throw err
    console.log("url1.txt file created");  
    fs.readFile("url1.txt", "utf-8", (err, data)=>{
        if (err) throw err
        console
    }   )
})   