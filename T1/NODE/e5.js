// write a node js script to  create to lisnere for print number of event
//  associted with and emmiter remove one of the lisnter and call remaining lisnere again also print
//  number of remaning lisner at the end remove all lisner and count the lisner

const ee = require("events")
const e = new ee()
e.on("myevent1", f1=() => {
  console.log("myevent1 listener 1");
});
e.on("myevent1", f2=() => {
  console.log("myevent1 listener 2");
}); 
console.log("number of listener for myevent1: " + e.listenerCount("myevent1"));
// remove one of the listener
e.removeListener("myevent1", f2);       
console.log("number of listener for myevent1: " + e.listenerCount("myevent1"));
// remove all listeners
e.removeAllListeners("myevent1");
console.log("number of listener for myevent1: " + e.listenerCount("myevent1"));