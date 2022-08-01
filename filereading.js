var fs = require('fs');
var data = fs.readFileSync("students.txt");
console.log(data)
console.log(data.toString())