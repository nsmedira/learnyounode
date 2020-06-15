// console.log(process.argv) ;

var array = process.argv ;
var sum = 0;

for( var i = 2; i < array.length ; i++ ){
    // console.log(array[i]) ;
    sum += +array[i] ;
}

// console.log('the sum of the arguments is ', sum) ;
console.log(sum) ;