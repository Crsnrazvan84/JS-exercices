//get current date
var x = new Date();
console.log(x);

//choosing a specific date 
//year, month, date, hours, minutes, seconds, miliseconds; if 2 args are provided, the rest is considered 0 or 1 (day)
x = new Date(2017, 11, 15, 10, 0, 0);
console.log(x);


//use an integer value, miliseconds since 1 jan 1970
x = new Date(1049494944595);
console.log(x);

//go from date to numeric value
console.log(x.getTime());

//numeric value coresponding to current time
var y = Date.now();
console.log(y);

//return the day of tje week of a specific date
var z = new Date();
console.log(z);
console.log(z.getDay());

var a = new Date(1984, 4, 12);
var b = a.getDay();
var c = ["sun", "mon", "tue", "wed", "thu", "fri","sat"]
console.log(a.getDay());
console.log(c[b]);

//create new date object
var now = new Date();
console.log(now.getHours());
now.setMonth(9);
now.setDate(15);
console.log(now);

//using built-in methods
var startTime = new Date();
for(var i = 0 ; i < 999 ; i++){
    console.log(i);
}
var endTime = new Date();
var elapsedTime =endTime.getTime() - startTime.getTime(); //elapsed time in milisec
console.log(elapsedTime);