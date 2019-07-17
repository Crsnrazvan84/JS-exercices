console.log(Function.prototype.call);
console.log(Function.call);
console.log(Function.call === Function.prototype.call);

var person1 = {
    firstname: "Steve",
    lastname: "Jobs",
    speak: function() {
        console.log("Hi! Thi is " + this.firstname + " " + this.lastname + ".");
    }
};

var person2 = {
    firstname: "Bill",
    lastname: "Gates"
};

// person2.speak = person1.speak;
// person2.speak();


person1.speak.call(person2);


function greet() {
    console.log("Hello " + this.name);
}

var person = {
    name: 'Mark'
}

greet.call(person);

//Challenge
person1.speak();
var func = person1.speak;
// func();
func.call(person1);