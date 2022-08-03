var http = require('http');
http.createServer(function(req,res){
    console.log("request for burger server");
    res.write("this is burger server... what burger you want")
    res.end()
}).listen(3500)