var path = require('path');
var requrl = 'localhost:3450/abc/xyz/prq.html'
var mypath='./services.html'
console.log(path.normalize(mypath))
console.log(path.parse(requrl))