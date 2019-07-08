function longFunction() {
    var x = 0;
    while(x<100000){
        console.log(x);
        x++;
    }
    console.log('complete');

}

function clickHandler() {
    console.log('click');
}

//listen to a click
document.addEventListener('click', clickHandler);
longFunction();
