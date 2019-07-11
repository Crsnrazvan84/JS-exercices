//developer 1
function greet(name) {
    console.log("hello " + name + ".");
}

//developer 2
var greet = "hello"; //function greet overwritten

//goodJS
var namespace1 = {
    greet: function() {
        console.log("hello " + name + ".");
    }
};
var namespace2 = {
    greet: "Hello"
};

namespace1.greet('Mark');