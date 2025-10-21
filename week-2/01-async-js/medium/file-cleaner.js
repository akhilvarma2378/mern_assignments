const fs = require("fs")

let fileData = ""

console.log(fileData);

fs.readFile("a.txt","utf-8",(err,data)=>{
    if(err)
        console.log("error")
    else{
        let newdata = data.replace(/\s+/g," ");
        console.log(newdata);
        fs.writeFile("a.txt",newdata,"utf-8",(err)=>{
            if(err)
            {
                console.log(err);
            }
        })
    }
})

