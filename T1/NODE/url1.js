var u= require("url");
var urlString = "https://localhost:8080/path/to/resource?name=JohnDoe&age=30";
var parsedUrl = u.parse(urlString, true);
process.noDeprecation = true;
console.log(parsedUrl)
a=parsedUrl.query
console.log(a.name)
console.log(a.age)