var pm = require("path")
path=pm.basename("D:/LJ/abc.html")
console.log(path)
path1 = pm.dirname("D:/LJ/FSD.html");
console.log(path1);
path3 = pm.extname("D:/LJ/FSD.html");
console.log(path3);
path4 = pm.parse("D:/LJ/FSD.html");
console.log(path4);