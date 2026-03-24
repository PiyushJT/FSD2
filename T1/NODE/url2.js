var u= require("url");
var urlString = "https://localhost:8080/test?m1=50&m2=60&m3=70";
var parsedUrl = u.parse(urlString, true);
process.noDeprecation = true;
a=parsedUrl.query
m1 = parseInt(a.m1);
m2 = parseInt(a.m2);
m3 = parseInt(a.m3);
avg = (m1 + m2 + m3) / 3;
console.log(avg);