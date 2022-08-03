var fs = require('fs');
fs.writeFile("students.txt",'append file is crazy',function(err){
    if(err)
    {
        console.log(err)
    } 
    else{
        console.log('data added into the file')
    }   
})