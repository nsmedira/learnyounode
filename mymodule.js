const fs = require('fs') ;
const path = require('path') ;

module.exports = (dir, ext, callback) => {
    ext = "." + ext ;
    fs.readdir(dir, (err, list) => {
        if(err){
            return callback(err) ;
        } else {
            var i = 0 ;
            while(i < list.length){
                if(path.extname(list[i]) != ext){
                    list.splice(i, 1) ;
                } else {
                    i++ ;
                }
            } ;
            callback(null, list) ;
        }
    })
};