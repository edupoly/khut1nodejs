var fs = require('fs');
fs.appendFile("students.txt",'lets see the output',function(err){
    if(err)
    {
        console.log(err)
    } 
    else{
        console.log('data appended into the file')
    }   
})