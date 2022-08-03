var fs = require('fs');

fs.open("students.txt",'r+',function(err,fd){
    fs.read(fd,function(err,buf,data){
        console.log(err)
        console.log(buf)
        console.log(data)
        console.log(data.toString())
    })
    fs.write(fd,'written by praveen',function(err,l,data){
        console.log(err)
        console.log(l)
        console.log(data.toString())
    })
})
fs.open("books.txt",'r',function(err,fd){
    console.log(fd)
})