var myPhone = {
    make: "Apple",
    model: "Iphone 7",
    warranty: 12,
    colour: "gold",
    ring: function(){
        console.log("beep beep beep!")
    }
};

console.log(myPhone.make);

console.log(myPhone["colour"]);


var x = "make";
console.log(myPhone[x]);

//create a function that creates a random property of myPhone

function getProperty(){
    var properties  = ["make", "model", "warranty", "colour"];
    var y = 4 * Math.random(); //between 0 and 4
    y = Math.floor(y);
    var property = properties[y];
    return property + ": " + myPhone[property];
}

console.log(getProperty());

