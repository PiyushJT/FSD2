// write a node js script using event handling to perform following task 1.create a folder named abc 2.create a file named xyz.txt and write data into it 3.apeend data to that file  and print massage data apeend successfuly 4.read the contain of the file and print on console 5.copy contonet xyz.txt to pqr.txt 6.delete the file xyz.txt and last the print the massage all operation successfuly do all this oprations of usings sync file system modual
// sync file system module
// if already folder exist then show message folder already exist else make folder and perform all the operations
const e = require("events");
const fs = require("fs");
const ee = new e();
ee.on("append", (filename) => {
    fs.appendFileSync(filename, "\nThis is additional data to append in the file.");
    console.log("data append successfully");
    ee.emit("read", filename);
});

ee.on("read", (filename) => {
    const data = fs.readFileSync(filename, "utf8");
    console.log("Data in the file:");
    console.log(data);
    ee.emit("copy", filename);
}
);
ee.on("write", (filename) => {
    fs.writeFileSync(filename, "This is a sample data to write in the file.");
    ee.emit("append", filename);
});
ee.on("mkdir", (dirname) => {
    if (fs.existsSync(dirname)) {
        console.log("folder already exist");    
    } else {    
        fs.mkdirSync(dirname);  
        console.log("Directory Created");   
        ee.emit("write", dirname + "/xyz.txt");
    }   
}); 
ee.on("copy", (filename) => {
    fs.copyFileSync(filename, "pqr.txt");
    console.log("file copied successfully");
    ee.emit("delete", filename);

});
ee.on("delete", (filename) => {
    fs.unlinkSync(filename);
    console.log("file deleted successfully");
    console.log("All operations completed successfully");
});
ee.emit("mkdir", "abc");
