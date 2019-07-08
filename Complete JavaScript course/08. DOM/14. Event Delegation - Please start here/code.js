//html elements
var paragraphs = document.querySelectorAll("p");
var div = document.querySelector("div");

//functions
function logHello() {
  console.log("hello");
}

//atach events
// for (var i = 0; i < paragraphs.length; i++) {
//   paragraphs[i].addEventListener("click", logHello);
// }

//add a new paragraph
var paragraph = document.createElement("p");
paragraph.innerHTML = "Paragraph 4";
div.appendChild(paragraph);

//get the parent element, add a click listener
div.addEventListener("click", function(event) {
  if (event.target && event.target.nodeName == "P") {
      console.log(event.target.innerHTML + ' clicked');
  }
});

//add a new paragraph
var paragraph5 = document.createElement("p");
paragraph5.innerHTML = "Paragraph 5";
div.appendChild(paragraph5);