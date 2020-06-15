const fs = require('fs') ;
// '../../Python/Coursera/Python for Everybody/Capstone/geodata/where.js'

var path = process.argv[2] ;
// console.log(path) ;
var buffer = fs.readFileSync(path)
var string = buffer.toString() ;
// console.log(string) ;
var split = string.split('\n') ;
// console.log(split) ;
// console.log(split[0]) ;
var count = split.length - 1 ;
console.log(count) ;