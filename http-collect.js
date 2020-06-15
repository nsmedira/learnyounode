'use strict' ;

// Write a program that performs an HTTP GET request to a URL provided to you as the first command-line argument.
const http = require('http') ;
var url = process.argv[2] ;

// Collect all data from the server (not just the first "data" event)
var charactersReceived = 0 ;
var string = '' ;
http.get(url, callback).on('error', console.error) ;

// Collect data across multiple "data" events and append the results together prior to printing the output. Use the "end" event to determine when the stream is finished and you can write the output.
function callback(response){
    response.on('data', (data) => {

        // console.log('we are in the data clause') ;
        // console.log('characters received: ', charactersReceived) ;

        var substring = data.toString() ;
        string += substring ;
        charactersReceived += substring.length ;
    }) ;
    
    response.on('error', (error) => {
        console.log(error) ;
    }) ;
    
    response.on('end', () => {
        // write two lines to the console (stdout).

        // The first line you write should just be an integer representing the number of characters received from the server.
        console.log(charactersReceived) ;

        // The second line should contain the complete String of characters sent by the server.
        console.log(string) ;
    }) ;
} ;