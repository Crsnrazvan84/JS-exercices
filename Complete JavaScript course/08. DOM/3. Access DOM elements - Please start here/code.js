console.log(window);

//access an element
var p1 = document.getElementById("p1");
var p2 = document.getElementById("p2");
console.log(typeof p1);
console.log(p1);
console.log(p1.innerHTML);
console.log(p2);

//access a list of elements by tag name
var paragraphs = document.getElementsByTagName("p");
console.log(paragraphs);
console.log(typeof paragraphs);

//access the first element with a certain characteristic
var firstParagraph = document.querySelector("p");
console.log(firstParagraph);
var firstGreenEelement = document.querySelector(".green");
console.log(firstGreenEelement);

//access propreties of one element
console.log(paragraphs[1].innerHTML);

//access children of a node
var bodyChildren = document.body.children;
console.log(bodyChildren);

//add a new child to the body
var p = document.createElement("p");
console.log(p);
var textNode = document.createTextNode("A new paragraph");
p.appendChild(textNode);
console.log(p);
document.body.appendChild(p);
console.log(window.document);