// to create a file name exam.txt containing the intaial text exam attend then it shoud add three more line Entry 1:pass entry 2: fail  entry 3 :pass after this program must read the file and count how many time the word pass apeare and
//  if the pass apeare three or more time the program should eraise the contain inside exam.txt

var fs = require("fs");

fs.writeFileSync("exam.txt", "exam attend");

fs.appendFileSync("exam.txt", "\nEntry 1: Pass");
fs.appendFileSync("exam.txt", "\nEntry 2: Fail");
fs.appendFileSync("exam.txt", "\nEntry 3: Pass");

console.log("File exam.txt created and entries added.");

var content = fs.readFileSync("exam.txt", "utf-8");
var words = content.split(" ");
console.log(words)
console.log(words.length)
var passCount = 0;

for (var i = 0; i < words.length; i++) {
    if (words[i] == "Pass") {
        passCount++;
    }
}

console.log("Number of times 'Pass' appears: " + passCount);

if (passCount >= 3) {
    fs.writeFileSync("exam.txt", "");
    console.log("File exam.txt cleared because 'Pass' count >= 3.");
} else {
    console.log("File not cleared because 'Pass' count < 3.");
}
