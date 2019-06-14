//a design pattern


var factorial1= function(n){
    var result = 1
    for(var i = n ; i > 0 ; i--){
        result *= i;
    }
    return result;
}

console.log(factorial1(3));//1*2*3
console.log(factorial1(4));//1*2*3*4
//factorial1(n) = n * factorial1 (n-1)

factorial = function(n){
    if(n == 1){
        return 1;
    }else{
        return n * factorial(n-1);
    }
}

console.log(factorial(3));//1*2*3
console.log(factorial(4));//1*2*3*4