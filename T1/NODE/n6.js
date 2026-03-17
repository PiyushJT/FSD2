// write node js to write the text (you are creating a file ) to help.txt after that append the text you are appending data to same help.txt file after that read the file and pront the console after the finsing the read opration copy the containt of help.txt
//  file to help2.txt file after finshing copy opration print the line thank for using this progrm  
var fs = require("fs")
fs.writeFile("help.txt","you are creating a file",(err)=>{
    if (err) throw err

     console.log("writing finshing")
    fs.appendFile("help.txt","you are appending data",(err)=>{
            if (err) throw err

            console.log("append ")
            fs.readFile("help.txt","UTF-8",(err,data)=>{
                if (err) throw err

                console.log(data)
                fs.copyFile("help.txt","help1.txt", (err)=>
                    {
                        if (err) throw console.error(err);
                        
                        console.log("copy")
                        console.log("thank for using this progrm")
                    })
            })
        })
})