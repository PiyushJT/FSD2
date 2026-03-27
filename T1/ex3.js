// Write a nodeJS script to fire an event named calculate which 
// calculates the total marks of 5 subjects about of 25 marks and 
// displays the total marks on console as an output.The calculate event 
// fires another event name percentage which takes total marks as 
// argument and percentage should get displayed in console.

const e = require('events'); 
const ee = new e();
mark=[20, 22, 18, 24, 25];
ee.on('calculate',()=>{
    let total = 0;
    for(i=0; i<mark.length; i++){
        total += mark[i];
    }
    ee.emit('percentage', total);
}); 
ee.on('percentage',(total)=>{
    let percentage = (total/125)*100;
   console.log("Total Marks: " + total);
   console.log("Percentage: " + percentage + "%");
});
ee.emit('calculate');