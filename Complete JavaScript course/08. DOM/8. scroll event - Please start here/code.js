addEventListener("scroll", fscroll);
function fscroll() {
  console.log(document.body.scrollHeight - innerHeight);
  //console.log(innerHeight);
  console.log(pageYOffset);
  console.log(Math.round(pageYOffset/(document.body.scrollHeight- innerHeight) * 100) + '%');
}
