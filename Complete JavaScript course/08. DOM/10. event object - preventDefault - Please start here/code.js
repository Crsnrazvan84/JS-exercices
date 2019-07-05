var a = document.querySelector('a');
a.addEventListener('click', fPrevendDefault);
function fPrevendDefault(event) {
  //  console.log(event);
  event.preventDefault();
}