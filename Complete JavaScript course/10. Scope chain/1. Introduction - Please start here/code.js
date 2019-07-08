var x = "hello";

logHi();
logHi2(); 
logHi3('Hi there'); 
logHi3(x); 


function logHi() {
    var x = "hi";
    console.log(x);
}

function logHi2() {
    console.log(x);
}


function logHi3(x) {
    console.log(x);
}