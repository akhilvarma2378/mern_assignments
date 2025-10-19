const fspromise = require("fs").promises;
const fs = require("fs");

// async function main(){
//     let dataofFile = await fspromise.readFile("1-counter.md","utf-8")
//     console.log(dataofFile);
// }

// main();

fs.writeFile('1-counter.md',"Everything cleared by Writefile function","utf-8",(err)=>{
    if(err){
        console.log("error writing to the file");
    }
})
console.log("outside async function")