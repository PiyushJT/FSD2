// event Modual
const myevent = require("events")
e1 = new myevent();
e1.on('greet',()=>{
    console.log("hello user")
})
e1.emit('greet')
