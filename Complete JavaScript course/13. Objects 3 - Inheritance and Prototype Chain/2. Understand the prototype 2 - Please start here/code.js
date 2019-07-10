function phone(make, model, warranty, color) {
    this.make = make;
    this.model = model;
    this.warranty = warranty;
    this.color = color;
}

//let'sbuild a phone
var myPhone = new phone('Apple', 'Iphone 5', 12, 'white');

//object prototype
console.log(myPhone.__proto__);

//constructor prototype
console.log(phone.prototype);
