var a = 1;
var b = a; // b is equal 1
a ++; // a becomes 2
console.log(a);
console.log(b);

var house1 = {
    type: 'terraced',
    town: 'Cambridge'
}
var house2 = house1; 

house1.town = 'London';
console.log(house1);
console.log(house2);

//back tofunctions
var c = 1;

//function tha adds 1 to x
function addOne(x){
    x++;
}
addOne(c);
console.log(c);// c is still 1 because only a copy of c was used inside the function

function add1(){
    c++; 
}
add1();
console.log(c);


// pass by reference
var person1 = {
    name: 'Mike',
    age: 12
}

var person2 = person1;

function addYear(person){
    person.age ++;
}

addYear(person1);
console.log(person1);
console.log(person2);

