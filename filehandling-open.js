var fs = require('fs');
fs.open("students.txt",'r+',function(err,fd){
    console.log(fd)
    fs.read(fd,function(err,a,data){
        console.log("data",data.toString())
        console.log("bf",a)
    })
    console.log("HI")
    fs.write(fd,'indian ',function(err,ax,data){
        console.log(err,ax,data)
    })
    // fs.appendFile(fd,'appending text in open mode',function(err,data){
    //     console.log(err,data)
    // })
    fs.read(fd,function(err,a,data){
        console.log("data",data.toString())
        console.log("bf",a)
    })
    
})