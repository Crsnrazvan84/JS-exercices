var shoppingList = ['orange', 'apple', 'banana'];
console.log(shoppingList);

shoppingList.forEach(function(element){
    console.log(element);
});

//ES6

for(element of shoppingList){
    console.log(element);
}