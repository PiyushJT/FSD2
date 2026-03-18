const ee= require('events')
e2 = new ee()
e2.on('front',(start,end)=>{
    console.log(`start from ${start} end from ${end}`)
})
e2.emit('front',1,100)