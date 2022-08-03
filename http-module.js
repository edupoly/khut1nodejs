var http = require('http');
http.createServer(function(req,res){
    console.log('request recied')
    res.write('hello.. how are you doing..this is icream server')
    res.end();
}).listen(4500)