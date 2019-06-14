// Booleans
var x = 3;
var y = 5;
var z = x < y;
console.log(z);

// Logical operators
z = (x < y) && (x > 0);


z = false || true; //if  at least one is true than the answer is true
console.log(z);

z = !(x > 10); // ! stands for "the opposite"
console.log(z);

z = false && true || true; //%% is stronger than || ("or")
console.log(z);

// Unary Operator

z = x > 2 ?  'Pass' : 'Fail';
console.log(z);

// Logical operators with nonbooleans

z = true && true;
console.log(z);

var fruit;
console.log(fruit);
z  = fruit || true; // OR
console.log(z);