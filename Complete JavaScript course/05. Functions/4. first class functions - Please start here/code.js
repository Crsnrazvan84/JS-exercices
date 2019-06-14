//storea value inside a variable
var sum = function (a, b){
    return a +b;
}
console.log(sum(1, 3));

//use values to set objects properties
var myPhone = {
    make: 'Apple', 
    model: 'Iphone6',
    warranty: 12, 
    color: 'gold',
    showWarrantyDetails: function(){
        console.log('This phone comes with ' + this.warranty + " months of warranty!");
    }
}
myPhone.showWarrantyDetails();

//pass a function to a function
function f(x){
    // return Math.pow(x, 2);
    return x * 2;
}
console.log(f(2));

function g(myFunction, a, b){
    return myFunction(a) + myFunction(b)
}

console.log(g(f, 3, 4));

//have a function returning a function
function add(x){
    return function(a){
        return a + x;
    }
}

var addOne = add(1);
console.log(addOne(3));

var addTwo = add(2);
console.log(addTwo(5));