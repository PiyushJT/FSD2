// write a node.js script using Event handling to perform following 
// tasks in sequence:
// a) Create file in it named abc.txt and enter data into it.
// b) Append data to that file abc.txt and print message “Data Appended 
// Successfully”.
// c) Read the content of the file abc.txt and print the content on http 
// web server.
// d) Do all the operations of File using asynchronous file system 
// module. And Lastly print the message “All operations performed 
// successfully” on console.
const e = require('events'); 
const ee = new e();
const fs = require('fs');
const http = require('http');



ee.on("createFile",()=>{
    fs.writeFile('abc.txt', 'Hello, this is abc.txt file.', function (err) {
        if (err) { console.log("error " + err); }
        else {
            ee.emit("appendData");
        }               
    });             
});
ee.on("appendData",()=>{
    fs.appendFile('abc.txt', '\nThis is appended data.', function (err) {
        if (err) { console.log("error " + err); }
        else {
            console.log("Data Appended Successfully");
            ee.emit("readFile");
        }               
    });             
}); 
ee.on("readFile",()=>{                  
    fs.readFile('abc.txt', "utf-8", (Err, data) => {
        if (Err) console.log("Error : " + Err)
        console.log(data);
        console.log("All operations performed successfully");
    }   );
});
const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    ee.emit("createFile");
});server.listen(3777);
