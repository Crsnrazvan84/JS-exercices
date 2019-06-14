//This is an introduction to scope. More details can be found in the advanced sections.

//a is a global variable
var a = 1;

function f(x){
    return x + a;
}

console.log(f(2));

function f2(x){
     var a = 2;
     return x + a;
}

console.log(f2(3));

function g (a){
    var b = a + 3;
    var a = 10;
    return b;
}

console.log(g(5));

function h(x){
    return x + c;
}
console.log(h(2));//c is undefined
var c = 3;
console.log(h(2));//2 +3
