//superClass1
function phone1(make, model, warranty, colour) {
    this.make = make;
    this.model = model;
    this.warranty = warranty;
    this.colour = colour;
}
phone1.prototype = {
    extendWarranty: function(x) {
        this.warranty += x;
    }
};

//superClass2
function phone2(warranty) {
    this.warranty = warranty;
    this.extendWarranty = function() {
        this.warranty = 0;
    };
}

//subClass
function smartPhone(make, model, warranty) {
    this.make = make;
    this.model = model;
    this.warranty = warranty;
}

//augment function
function augment(receivingClass, givingClass) {
    var helperObject = new givingClass();
    var receivingInstance = new receivingClass()
    for (var i in helperObject) {
        if(!(receivingInstance.hasOwnProperty(i))) {
            receivingClass.prototype[i] = helperObject[i];
        }
    }
}

// //property inside object?
// console.log("extendWarranty" in new phone1());

// //cycle through properties/methods of an object
// for (var i in new phone1()) {
//     console.log(i);
// }

// //hasOwnProperty
// var myPhone = new phone1();
// console.log(myPhone.hasOwnProperty("extendWarranty"));
