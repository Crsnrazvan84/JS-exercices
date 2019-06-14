// Object = collection of properties
var myPhone = {
    make: "Apple",
    model: "Iphone 7",
    warranty: 12,
    color: "gold"
}

console.log(myPhone);
console.log(myPhone.model);


// change poperty
myPhone.model = "Iphone 6";
console.log(myPhone);

// add a new property
myPhone.storage = "64 Go"
console.log(myPhone);

// delete a property
delete myPhone.storage;
console.log(myPhone);

var x = 1;
var y = x;
x  = 2;
console.log(y);

var myOtherPhone = myPhone;
console.log(myOtherPhone);

myPhone.color = "grey";
console.log(myPhone);

console.log(myOtherPhone);