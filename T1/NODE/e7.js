// write a node js script to handle events to write a data , append data and then read the file and display data in console do all the operation using asyncfile system module

const e = require("events");
const fs = require("fs");
const ee = new e();
ee.on("append", (filename)=>{
   
    fs.appendFile(filename,"\nThis is additional data to append in the file.", (err) => {
       if (err) throw err;
       ee.emit("read", filename);
    });
});

ee.on("read", (filename)=>{
    fs.readFile(filename, "utf8", (err, data) => {
       if (err) throw err;
       console.log("Data in the file:");
       console.log(data);
    });
});
ee.on("write", (filename)=>{
    
    fs.writeFile(filename, "This is a sample data to write in the file.", (err) => {
       if (err) throw err;
       ee.emit("append", filename);
    });
});

ee.emit("write", "sample7.txt");