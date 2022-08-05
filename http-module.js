var http = require('http');
var path = require('path');
var url = require('url')
var fs = require('fs');
var students = [
    {
        firstname:'praveen',
        lastname:'gubbala',
        age:40,
        place:'hyderabad',
        gender:male
    },
    {
        firstname:'srikanth',
        lastname:'gubbala',
        age:30,
        place:'bengaluru',
        gender:male
    },
    {
        firstname:'komal',
        lastname:'gupta',
        age:44,
        place:'indore',
        gender:female
    },
    {
        firstname:'himesh',
        lastname:'askdjhba',
        age:20,
        place:'gandhinagar',
        gender:male
    }
]
http.createServer(function(req,res){
    
    if(req.url==='/favicon.ico'){
        fs.readFile('favicon.ico',function(err,buf){
            res.write(buf)
            res.end();
        })
    }
    
    var x = url.parse(req.url,true);
    if(x.pathname==='/addnumbers'){
        console.log(x.query)
        var n1 = +(x.query.n1)
        var n2 = +(x.query.n2)
        var r = n1+n2;
        res.write("<h1>"+r+"</h1>")
        res.end()
    }
    if(x.pathname==='/searchStudent'){
        var sname = x.query.studentname;
        if(students.includes(sname)){
            res.write("student available")
        }
        else{
            res.write('no student with the given name')
        }
        res.end();
    }

    if(req.url==="/"){
        fs.readFile('mypage.html',function(err,data){
            res.write(data.toString())
            res.end();
        })
    }
    else{
        var reqdetails = path.parse(req.url);
        var filename = reqdetails.base;
        fs.readFile(filename,function(err,data){
            if(err){
                res.write("page not found")
                res.end()
            }
            else{
                res.write(data.toString())
                res.end();
            }
        })
    }
        
    
    
}).listen(4500)