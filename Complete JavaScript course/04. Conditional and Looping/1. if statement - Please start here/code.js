var balance = 40;
var price = 50;
if(price <= balance) {
    console.log('payment succesfull!');
    balance -=price;

}else{
    console.log('you don\'t have enough founds!');
}

var speed = 30;

if(speed > 70) {
    console.log('You are going too fast')
}else if(speed < 40) {
    console.log('You are going too slow')
}else{
    console.log('Your speed is fine')
}