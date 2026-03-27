// Write a Node.Js program for following action
// 1.Write a file having five random elements separated by white 
// space in .txt file.
// 2.append sorted array of these 5 elements in same file along with 
// message : “Sorted array:” in new line.
// 3.Find maximum number from that and append with message 
// “maximum number=” in same file. 

const fs = require('fs');

let n1 = Math.floor(Math.random() * 100);
let n2 = Math.floor(Math.random() * 100);
let n3 = Math.floor(Math.random() * 100);
let n4 = Math.floor(Math.random() * 100);
let n5 = Math.floor(Math.random() * 100);

fs.writeFileSync('numbers.txt', `${n1} ${n2} ${n3} ${n4} ${n5}`);

let sorted = [n1, n2, n3, n4, n5].sort((a, b) => a - b);

fs.appendFileSync('numbers.txt', '\nSorted array: ' + sorted.join(' '));

let maxNum = Math.max(n1, n2, n3, n4, n5);

fs.appendFileSync('numbers.txt', '\nmaximum number= ' + maxNum);

