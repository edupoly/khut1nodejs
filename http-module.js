var http = require('http');
var path = require('path')
var fs = require('fs');
http.createServer(function(req,res){

    if(req.url==='/favicon.ico'){
        fs.readFile('favicon.ico',function(err,buf){
            res.write(buf)
            res.end();
        })
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