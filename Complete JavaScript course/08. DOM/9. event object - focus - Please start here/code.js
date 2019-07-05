var input = document.querySelector('input');
//focus
input.addEventListener('blur', ffocus);
function ffocus(event){
    console.log(event);
    console.log(event.target.value);
}