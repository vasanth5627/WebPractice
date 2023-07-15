const fs = require('fs')
// fs.readFile('file.txt', 'utf-8',(data,err)=>{
//     if(err){
//         console.log(err);
//         return;
//     }
//     console.log(data);
// })

const content = "hi how are you";
fs.writeFile('file.txt',content,err=>{
    if(err) console.log(err);
     return;
})