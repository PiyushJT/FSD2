// Write a script to define two JSON objects named as “division1” and 
// “division2” having an array to store 5 integer numbers. Write this 
// object in a file named XYZ.txt using file system. Define third array  
// as result which gives output as explained below: Suppose first array 
// contains base value and second array contains power value and then 
// third array will give output as: a^b.For example: first array[0]=2 and 
// second array[0]=3 then it should return 8 in third array[0] .Also 
// append this result in XYZ.txt and as well as on console.

const fs = require('fs');

const division1 = {
    numbers: [2, 3, 4, 5, 6]
};  
const division2 = {
    numbers: [3, 2, 1, 0, 4]
};

fs.writeFileSync('xyz.txt', JSON.stringify(division1));
// append divison2  
fs.appendFileSync('xyz.txt', '\n' + JSON.stringify(division2));
let result = [];
for (let i = 0; i < division1.numbers.length; i++) {
 
    result[i] = Math.pow(division1.numbers[i], division2.numbers[i])
}
fs.appendFileSync('xyz.txt', '\n' + JSON.stringify(result));
console.log(result);