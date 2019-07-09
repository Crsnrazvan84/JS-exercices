for (var i = 0; i < 3; i++) {
    console.log(i);
    document.getElementById(i).onclick = f(i);
}
function f(j){
    return function() {
        console.log(j);
    }
}


