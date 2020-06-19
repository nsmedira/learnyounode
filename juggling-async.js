// This problem is the same as the previous problem (HTTP COLLECT) in that you need to use http.get(). However, this time you will be provided with three URLs as the first three command-line arguments.

'use strict' ;

// Write a program that performs an HTTP GET request to a URL provided to you as the first command-line argument.
const http = require('http') ;
var url1 = process.argv[2] ;
var url2 = process.argv[3] ;
var url3 = process.argv[4] ;

// console.log(url1, url2, url3) ;

// You must collect the complete content provided to you by each of the URLs and print it to the console (stdout). You don't need to print out the length, just the data as a String; one line per URL. The catch is that you must print them out in the same order as the URLs are provided to you as command-line arguments.

// Collect all data from the server (not just the first "data" event)

// don't need to count characters
// var charactersReceived = 0 ;

function GetData ( url, callback ) {
    http.get(url, (response) => {
        var str = '';
        response.on('data', (data) => {
            str += data.toString();
        })
        response.on('error', (error) => {
            callback(error) ;
        }) ;
        response.on('end', () => {
            callback(null, str);
        })
    });
}

GetData (url1, function(err, data) {
    if (err) {
        console.log(err);
    } else {
        console.log(data);
        GetData (url2, function(err, data) {
            if (err) {
                console.log(err);
            } else {
                console.log(data);
                GetData (url3, function(err, data) {
                    if (err) {
                        console.log(err);
                    } else {
                        console.log(data);
                    }
                });
            }
        });
    }
});