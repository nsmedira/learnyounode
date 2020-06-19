'use strict' ;

const http = require('http') ;
var map = require('through2-map');

var port = process.argv[2] ;

var server = http.createServer((request, response) => {
    // server logic
    if (request.method == "POST") {
        request.pipe(map (function (chunk) {
            return chunk.toString().toUpperCase();
        })).pipe(response);
    }
}) ;

server.listen(port) ;