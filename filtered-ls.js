const fs = require('fs') ;
const path = require('path') ;

var filepath = process.argv[2] ;
var filter = '.' + process.argv[3] ;

fs.readdir(filepath, (err, list) => {
    if(!err){
        // console.log(list) ;
        var i = 0 ;
        while(i < list.length){
            // console.log(list) ;
            // console.log(path.extname(list[i])) ;
            if(path.extname(list[i]) != filter){
                // console.log(list[i], 'is not a match') ;
                list.splice(i, 1) ;
            } else {
                // console.log(list[i], 'is a match') ;
                i++ ;
            }
        } ;
        for( i = 0 ; i < list.length ; i++ ){
            console.log(list[i])
        } ;
    }
})