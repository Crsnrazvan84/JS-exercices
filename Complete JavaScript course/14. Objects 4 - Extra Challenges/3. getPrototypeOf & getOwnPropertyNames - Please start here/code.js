var myPhone = {
    make: "Sgamsung",
    model: "S6"
};

console.log(Object.getPrototypeOf(myPhone));
console.log(Object.getOwnPropertyNames(myPhone));

var returnProperties = function(obj) {
    var properties = Object.getOwnPropertyNames(
        Object.getOwnPropertyNames(obj)
    );
    var values = [];
    properties.forEach(function(key) {
        values.push(obj[key]);
    });

    return [properties, values];
};

console.log(returnProperties(new Array()));
console.log(returnProperties(new Object()));

for (vari in new Array()) {
    console.log(i);
}
