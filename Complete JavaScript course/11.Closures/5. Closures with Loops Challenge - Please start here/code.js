// var cars = [];
// for(var i = 0; i < 3; i++){
//     cars.push(function(){
//         console.log(i);
//     })
// }
// cars[0]();

var cars = [];
for (var i = 0; i < 3; i++) {
    cars.push(f(i));
}
function f(j) {
    return function() {
        console.log(j);
    };
}
cars[0]();
cars[1]();

for (var i = 0; i < 3; i++) {
    setTimeout(f(i), 3000)
}
