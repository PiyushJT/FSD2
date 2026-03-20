// Write a function 'ArrayToObject' which takes in an array of arrays,
// and returns an object with each pair of elements in the array as a keyvalue pair and store the result in one arraytoobject.txt file.
// Input=[['Country', India'], ['State', 'Gujarat'], ['City', ‘Ahmedabad’]]
// Output= { Country : ' India ', State : ' Gujarat ', City :
// ‘Ahmedabad’ }

const fs = require("fs");
function ArrayToObject(arr) {
    const obj = {}; 
    for ([k, v] of arr) {
        obj[k] = v; 
    }       
    return obj;            

}       
const input = [['Country', 'India'], ['State', 'Gujarat'], ['City', 'Ahmedabad']];  
const result = ArrayToObject(input);        
fs.writeFileSync("arraytoobject.txt", JSON.stringify(result));                 
console.log("Object written to arraytoobject.txt successfully");        