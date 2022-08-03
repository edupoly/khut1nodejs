var fs = require('fs');
fs.promises.readFile('students.txt').then(function(data){
    console.log(data.toString())
}).catch(function(){
})
