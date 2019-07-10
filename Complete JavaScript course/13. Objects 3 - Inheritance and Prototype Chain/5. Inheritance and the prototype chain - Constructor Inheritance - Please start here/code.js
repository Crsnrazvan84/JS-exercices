//superclass
function phone(make, model, warranty, color) {
    this.make = make;
    this.model = model;
    this.warranty = warranty;
    this.color = color;
    
}
phone.prototype = {
    extendWarranty: function(x) {
        this.warranty += x;
    }
}

//subclass
function smartPhone(make, model) {
    this.make = make;
    this.model = model;
}

//subclass instance
var myPhone = new smartPhone("Apple", "Iphone 7");
console.log(myPhone);
console.log(smartPhone.prototype);
console.log(myPhone instanceof smartPhone);
console.log(myPhone instanceof Object);

// add one method to the prototype
smartPhone.prototype.endWarranty = function() {
    this.warranty = 0;
};
myPhone.endWarranty();
console.log(myPhone);

//inherit everything from the superclass phone: constructor content only
// smartPhone.prototype.helper = phone;
// smartPhone.prototype.helper("Samsung", "S6", 12, "grey");

//inherit everything from the superclass phone
smartPhone.prototype = new phone('Samsung', 'S6', 12, "grey");
smartPhone.prototype.constructor = smartPhone;

var myPhone2 = new smartPhone("Apple", "Iphone 7"); 
console.log(myPhone2);
console.log(myPhone2.color);
console.log(myPhone2.warranty);
myPhone2.extendWarranty(12);
console.log(myPhone2.warranty);
console.log(smartPhone.prototype);


