var div = document.querySelector('div');
var p = document.querySelector('p');
var span = document.querySelector('span');

//functions
function logDiv(){
    console.log('div');
}

function logP(){
    console.log('Paragraph');
}

function logSpan(){
    console.log('span');
}

//events
div.addEventListener('click', logDiv, true);
p.addEventListener('click', logP, true);
span.addEventListener('click', logSpan);