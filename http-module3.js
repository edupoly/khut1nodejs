var http = require('http');
http.createServer(function(req,res){
    console.log("request for noodle server");
    res.write("this is noodle server... what noodles you want")
    res.end()
}).listen(80)