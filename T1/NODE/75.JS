// Write a Node.Js program for following action
// 1.	Write a file having five random elements separated by white
// space in .txt file.
// 2.	append sorted array of these 5 elements in same file along with
// message : “Sorted array:” in new line.
// 3.	Find maximum number from that and append with message
// “maximum number=” in same file. 
const fs = require("fs");       
fs.writeFileSync("random1.txt", "10 5 3 3 8");
const data = fs.readFileSync("random.txt", "utf8");
const arr = data.split(" "); 
arr.push(...arr);      
const sortedArr = arr.sort((a, b) => a - b);            
fs.appendFileSync("random1.txt", `\nSorted array: ${sortedArr.join(" ")}`);
// find maximum number usinng for loop
let maxNum = sortedArr[0];
for (let i = 1; i < sortedArr.length; i++) {
    if (sortedArr[i] > maxNum) {    
        maxNum = sortedArr[i];
    }       
}   
fs.appendFileSync("random1.txt", `\nmaximum number= ${maxNum}`);    
console.log("Data written to random.txt successfully"); 
