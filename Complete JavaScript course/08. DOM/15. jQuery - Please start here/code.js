$("#p2").css("background-color", "lightgreen");
$(".red")
  .removeClass("red")
  .addClass("blue");

var a = setTimeout(function() {
  $('[name="p3"]').fadeOut();
}, 3000);

var b = setTimeout(function() {
  $('[name="p3"]').fadeIn();
}, 5000);

$("p").css("font-size", "24px");

$("a").attr("href", "http://wikipedia.org");
$("a").attr("target", "_blank");

console.log($("#p3").html());
$("#p3").html("Paragraph 3 changed");

$("input").val("Mark");


$('div').addClass('grey');
$('div').width(350);

//add click event
$('div').click(function() {
    $('div').animate({width: 300}, callback)
})

function callback (){
    console.log('finished');
}

$('div').after('<div>Extra div</div>')