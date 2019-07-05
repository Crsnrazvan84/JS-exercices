var f1 = function () {
    console.log('click btn 1');
};

var f2 = function () {
    console.log('btn1 clicked');
}

var button1 = document.getElementById('button1');
// button1.onclick = f1;
// button1.onclick = f2;

button1.addEventListener('click', f1);
button1.addEventListener('click', f2);

button1.removeEventListener('click', f2);

//button2
var button2 = document.getElementById('button2');
button2.ondblclick = function() {
    var p1 =  document.getElementById('p1');
    p1.style.backgroundColor = 'lightgreen';
};

//paragraph 2
var p2 =  document.getElementById('p2');
p2.onclick = function() {
    this.style.backgroundColor = "mediumpurple";
};

//
var title = document.getElementById('title');