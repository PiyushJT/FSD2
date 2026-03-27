// Write a Node.js program that uses the events module to do the 
// following:
// Fire an event "welcome" that prints "Welcome to Node.js" on the 
// console.
// Fire an event "time" that prints the current system time.
// Fire an event "bye" that prints "Goodbye!".
const e = require('events'); 
const ee = new e();
ee.on("welcome",()=>{
    console.log("Welcome to Node.js");
});
ee.on("time",()=>{
    console.log("Current system time: " + new Date().toLocaleTimeString());
}); 
ee.on("bye",()=>{
    console.log("Goodbye!");
});
ee.emit("welcome");
ee.emit("time");
ee.emit("bye");