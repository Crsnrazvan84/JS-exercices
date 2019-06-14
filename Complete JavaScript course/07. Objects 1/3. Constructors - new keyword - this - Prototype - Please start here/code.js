//generic object cibstructor

var myPhone = new Object();


myPhone.make = "Samsung";
myPhone.model = "Galaxy S6";
myPhone.warranty = 12;
myPhone.colour = "black";
myPhone.warranty = 12;
console.log(myPhone);

//Constructors


function phone(make, model, warranty, colour){
    this.make = make;
    this.model = model;
    this.warranty = warranty;
    this.colour = colour;
}

//lets build a phone

var myNwePhone = new phone("Apple", "Iphone 5", 12, "black");
console.log(myNwePhone);

//add a new property
myNwePhone.condition = "like new";
console.log(myNwePhone);

//lets build another phone

var myOtherPhone = new phone("Apple", "Iphone 4", 12, "black");
console.log(myOtherPhone);

//add a condition property to all phones
phone.prototype.ring = function(){
    console.log("beep beep beep!");
};
phone.prototype.extedWarranty = function(x){
    this.warranty += x;
};
phone.prototype.condition = "new";

//let's creat another phone
var myBrothersPhone = new phone("Samsung", "Galaxy S6", 12, "black");
console.log(myOtherPhone);
console.log(myBrothersPhone);
console.log(myBrothersPhone.condition);
console.log(phone.prototype);
myBrothersPhone.ring();