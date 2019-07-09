function run(x){
    var i = -3;
    return function(){
        i += 3;
        return x[i % 4];
    }
}

var f = run([4, 8, 1, 3]);


console.log(f())//4
console.log(f())//3
console.log(f())//1
console.log(f())//8
console.log(f())//4
console.log(f())//3