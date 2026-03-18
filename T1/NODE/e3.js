/* write a node js using the events modules to simulate a squence of events 
1. when a connection event occurs , print connection successfully and triger data recived event
2. when the data recived occurs print data recived successfully 
3. finally print thx at the end of execution 
 */

const e = require("events");
const ee = new e();
ee.on('connection',()=>{
    console.log("connection successfuly")
    ee.emit("recive")
})
ee.on('recive',()=>{
    console.log("recived successfuly")
})
ee.emit("connection")
console.log("thank you")