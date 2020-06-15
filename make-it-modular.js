const mymodule = require('./mymodule.js') ;

mymodule(process.argv[2], process.argv[3], callback) ;

function callback(err, list){
    if(!err){
        for ( var i = 0 ; i < list.length ; i++ ){
            console.log(list[i]) ;
        }
    }
} ;

function bar (callback) {  
    foo(function (err, data) {  
    if (err) { return callback(err) } // early return  
    
    // ... no error, continue doing cool things with `data`  
    
    // all went well, call callback with `null` for the error argument  
    
    callback(null, data)  
    })  
}  