// copy function 
var fs= require("fs")
fs.writeFile("s1.txt","good morning", (err)=>{
    if(err) throw err

    console.log("write file")

    fs.copyFile("s1.txt","d1.txt", (err)=>
    {
        if (err) throw console.error(err);
        
        console.log("copy")
    

    fs.readFile("d1.txt", "utf-8", (err, data1) => {
    if (err) throw err;
    console.log("data:", data1);
  })
})
})