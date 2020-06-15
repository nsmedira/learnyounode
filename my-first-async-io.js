const fs = require('fs') ;
// '../../Python/Coursera/Python for Everybody/Capstone/geodata/where.js'

var path = process.argv[2] ;
fs.readFile(path, (error, data) => {
    if(!error){
        var buffer = data ;
        var string = buffer.toString() ;
        var split = string.split('\n') ;
        var count = split.length - 1 ;
        console.log(count) ;
    }
}) ;