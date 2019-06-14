//function statement declaration
function greet(){
    console.log("Hello!")
}
greet();

//function expresion

var greet2 = function() {
    console.log("Hi!")
}();

(function() {
    console.log("Hi!")
})();

(function() {
    console.log("Hi!")
}());
