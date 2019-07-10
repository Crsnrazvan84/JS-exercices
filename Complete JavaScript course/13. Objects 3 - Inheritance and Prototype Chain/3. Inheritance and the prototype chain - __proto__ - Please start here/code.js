var phone1 = {
    make: "Apple",
    model: "Iphone 7",
    warranty: 12,
    color: 'black',
    extendWaranty: function(x) {
        this.warranty += x;
    }
};

var phone2 = {
    make: "Samsung",
    model: "S7"
};

phone2.__proto__ = phone1;
console.log(phone2);
console.log(phone2.warranty);
phone2.extendWaranty(12);
console.log(phone2);

var phone3 = {
    make: "Samsung",
    model: "S8"
};
phone3.__proto__ = phone2;
console.log(phone3);
console.log(phone3.warranty);
console.log(phone3.color);

