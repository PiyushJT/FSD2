/*
write a node js script that performs the following using the path module and the asyn file  system module
1. from a given existing file path extract the dir name using path module
2.create the extractedn dir inside an existing folder
3.extract the file nae from the given path using path module
4.create that file inside the newly created dir and write some data into it
5.copy the content of this file to another file
6.Delete the orignal file after copying the content.
*/

var fs = require("fs");
var pm = require("path");
path1 = pm.dirname("D:/LJ/Sample.txt");
console.log(path1);
path2 = pm.basename("D:/LJ/Sample.txt");
console.log(path2);
newfilePath = path1 + "/" + path2;
fs.mkdir(path1, (err) => {
  if (err) throw err;
  console.log("Directory Created");
  fs.writeFile(newfilePath, "Sample Data", (err) => {
    if (err) throw err;
    console.log("File written");
    fs.copyFile(newfilePath, path1 + "/temp.txt", (err) => {
      if (err) throw err;
      console.log("file copied");
      fs.unlink(newfilePath, (err) => {
        if (err) throw err;
        console.log("Deleted");
        console.log("Completed");
      });
    });
  });
});