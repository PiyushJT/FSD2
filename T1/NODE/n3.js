// write a node js script to copy containt of one file two onther file data should be fetch from soruce.txt and insert to destination.txt
//  and read data from destination file at the end perform all this task async way 
var fs = require("fs");
fs.writeFile("source.txt", "Good Morning", (err) => {
  if (err) throw err;
  console.log("Source File creates");

  fs.readFile("source.txt", "utf-8", (err, data) => {
    if (err) throw err;
    console.log("Data  from Source", data);

    fs.writeFile("destination.txt", data, (err) => {
      if (err) throw err;
      console.log("data copied");

      fs.readFile("destination.txt", "utf-8", (err, data1) => {
        if (err) throw err;
        console.log("data:", data1);
      });
    });
  });
});