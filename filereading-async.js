var fs = require('fs');
fs.readFile("students.txt",function(err,data){
    if(err){
        console.log(err)
    }
    else{
        console.log(data.toString())
    }
})
console.log("this is the last line")