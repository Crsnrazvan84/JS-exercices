var shoppingList = ['orange', 'apple', 'banana'];
console.log(shoppingList);


//add an element at the end
var x = shoppingList.push('pear');
console.log(shoppingList);

//pop an element
x= shoppingList.pop();
console.log(shoppingList);

x= shoppingList.unshift('grapes','strawbwerry');
console.log(shoppingList);

//go to element of index 1
//remove 2 el
//replace them with grapes sand straberry

shoppingList.splice(1, 2, "grapes", "strawbery")
console.log(shoppingList);

//return 2 el starting 0
 x = shoppingList.slice(0, 2);
 console.log(x);

//sort an array
shoppingList.sort();
console.log(shoppingList);

//reverse
shoppingList.reverse();
console.log(shoppingList);

//map
var addDelicious = function(n){
    return "Delicious" + n;
}

shoppingList.map(addDelicious);
console.log(x);

 x = shoppingList.map(addDelicious);
 console.log(x);

//filter

var number = [1, 3, 5, 9, 25, 34, 56];
var testFunction = function(n){
    return n % 3 == 0;
}
 x = number.filter(testFunction ) ;
console.log(x);

//every
x = number.every(testFunction);
console.log(x);
