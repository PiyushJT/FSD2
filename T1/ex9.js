// Write a Node.js script that uses the URL module to extract values 
// from the following URL:
// https://abc.com/data.txt?m1=Congrats&m2=Node+Test&m3=Best#Done
// The program should fetch the file name from the URL, create a file 
// with that name, and write the following content into the file using the 
// values from the URL:
// Congrats!
// Node Test
// #Done

var u= require("url");
var urlString = "https://abc.com/data.txt?m1=Congrats&m2=Node+Test&m3=Best#Done";
var parsedUrl = u.parse(urlString, true);
process.noDeprecation = true;
a=parsedUrl.query
parsedUrlpath = parsedUrl.pathname;
filenam = parsedUrlpath.split("/");

filename = parsedUrlpath.split("/")[1];
var fs = require("fs");
console.log(a)  
console.log(filenam);
fs.writeFile(filename, a.m1+"!\n"+a.m2+"\n"+a.m3, (err)=>{
    if (err) throw err
    console.log(filename + " file created");
})