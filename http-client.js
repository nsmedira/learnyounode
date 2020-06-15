const http = require('http') ;
var url = process.argv[2]

// The http.get() method is a shortcut for simple GET requests, use it to simplify your solution. The first argument to http.get() can be the URL you want to GET; provide a callback as the second argument.
http.get(url, callback).on('error', console.error) ;

// Unlike other callback functions, this one has the signature:  
//    function callback (response) { /* ... */ }  
//    Where the response object is a Node Stream object.
function callback(response){
    // You can treat Node Streams as objects that emit events. The three events that are of most interest are: "data", "error" and "end". You listen to an event like so:  
    //     response.on('data', function (data) { /* ... */ })
    response.on('data', (data) => {
        console.log(data.toString())
    }) ;

    response.on('error', console.error) ;
}