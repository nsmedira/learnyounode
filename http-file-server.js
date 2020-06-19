'use strict' ;

// import http, fs
const http = require('http') ;
const fs = require('fs') ;

// location of file to be served is second command line argument
var path = process.argv[3] ;
var src ; 

// write an http server that serves the same text file for each request it receives.
// http module has method http.createServer() which takes callback (request, response)
var server = http.createServer((request, response) => {
    // use fs.createReadStream() method to stream the file contents to the response
    src = fs.createReadStream(path) ;
    src.pipe(response) ;
}) ;



// server should listen on the port provided by the first argument to your program
server.listen(process.argv[2])