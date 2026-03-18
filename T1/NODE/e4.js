// create a node js program using events modual 1. registring multiple events listeners for differnts events(myevent1,myevent2) 
// 2. removing a sepcific event listerner for myevent2
//  3.removing all listener accocieted with myevent1 
// 4. triggering events and obseving wich liserners executed

const ee = require("events");
const e = new ee();
e.on("myevent1", f1=() => {
  console.log("myevent1 listener 1");
});
e.on("myevent1", f2=() => {
  console.log("myevent1 listener 2");
});     
e.on("myevent2", f3=() => {
  console.log("myevent2 listener 3");
}); 
e.on("myevent2", f4=() => {
  console.log("myevent2 listener 4");
}); 
// removing a specific event listener for myevent2
e.removeListener("myevent2", f4);
// removing all listener accocieted with myevent1       
e.removeAllListeners("myevent1");
// triggering events and obseving wich liserners executed
e.emit("myevent1");
e.emit("myevent2"); 