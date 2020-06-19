'use strict' ; 

// use core node module 'url' to parse requests
const url = require('url').URL ;

// write an http server
const http = require('http') ;
var server = http.createServer((request, response) => {
    
    // declare json variable
    var json ;

    // get the URL object from the request
    // the url provided to the new URL constructor needs to be absolute. if request url is relative path, need to provide host as second argument
    var thisURL = new URL(request.url, 'http://localhost') ;

    // add endpoint for url /api/parsetime
    if (thisURL.pathname == '/api/parsetime') {
        // when GET request
        if (request.method == 'GET') {
            // what do we do when with GET request to this url
            // expect request to contain query string with key 'iso' and an iso-format time as the value
            // example: /api/parsetime?iso=2013-08-10T12:10:15.474Z
            var iso = thisURL.searchParams.get('iso') ;

            var date = new Date(iso) ;

            var hour = date.getHours() ;
            var minute = date.getMinutes() ;
            var second = date.getSeconds() ;

            json = {
                hour,
                minute,
                second
            } ;

            // i guess this is being a good web citizen?
            response.writeHead(200, { 'Content-Type': 'application/json' })

            // return JSON
            response.end(JSON.stringify(json)) ; 

        }
    
    // add endpoint for url /api/unixtime
    } else if (thisURL.pathname == '/api/unixtime') {

        // accepts same query string but returns UNIX epoch time in milliseconds
        if (request.method == 'GET') {

            var iso = thisURL.searchParams.get('iso') ;
            var milliseconds = Date.parse(iso) ;

            json = {
                "unixtime": milliseconds
            } ;

            // i guess this is being a good web citizen?
            response.writeHead(200, { 'Content-Type': 'application/json' })

            // return JSON
            response.end(JSON.stringify(json)) ;
        }

    } ;

}) ;

// server listens on port specified in first command line argument
var port = process.argv[2] ;
server.listen(port); 