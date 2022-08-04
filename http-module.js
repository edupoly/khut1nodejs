var http = require('http');
var fs = require('fs');
http.createServer(function(req,res){
    console.log('request recied')
    fs.readFile('mypage.html',function(err,data){
        res.write(data.toString())
        res.end();
    })
}).listen(4500)