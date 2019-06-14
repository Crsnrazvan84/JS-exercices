// create an object
var person = {
    name: "Mark", 
    state: "Calofirnia",
    birth: 1984
}

//JSON object

var personJSON = {
    "name": "Mark", 
    "state": "Calofirnia",
    "birth": 1984
}

//JSON Array

var personJSON2 = [
    {
        "name": "Mark", 
        "state": "Calofirnia",
        "birth": 1984
    },
    {
        "name": "Mark", 
        "state": "Calofirnia",
        "birth": 1984
    }
];

console.log(personJSON);
console.log(typeof personJSON);
console.log(personJSON2);
console.log(typeof personJSON2);

//convert JSON to a string
var personString = JSON.stringify(personJSON);
console.log(personString);
console.log(typeof personString);

//parse a JSON string

var stringParsedJSON = JSON.parse(personString);
console.log(stringParsedJSON);
console.log(typeof stringParsedJSON);

