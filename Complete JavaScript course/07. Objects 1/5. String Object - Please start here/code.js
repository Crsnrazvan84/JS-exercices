var myString1 = "Javascript";
var myString2 = " is awesome";
var myString3 = "Java";
var myString4 = "I really enjoy learnig Javascript. It is so fun";

console.log(myString1.charAt(0));

// convatenate 2 strings
console.log(myString1.concat(myString2));

//does mustr1 include mystr3
console.log(myString1.includes(myString3));

//index of a character
console.log(myString1.indexOf("a"));
console.log(myString1.lastIndexOf("a"));

//to uuper case or lower case
console.log(myString4.toLocaleUpperCase());
console.log(myString4.toLocaleLowerCase());

//converta string obj to astring primitive
var y = new String("Mark");
console.log(y);
y = y.toString();
console.log(y);