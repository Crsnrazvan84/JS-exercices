// Check if a number is prime or not

//1. Prompt the user to input a whole number

//2. if the user does not provide a whole number, keep prompting the user to input a valid number until they provide one

var number;
do {
    number = prompt("Please input a whole number");
    number = parseInt(number);
} while (!Number.isInteger(number));



isPrime(number);
function isPrime(n) {
    if (n <= 1) {
        return false;
    } else if (n == 2) {
        return true;
    } else {
        var i = 2;
        while (1 < n && (n % i != 0)) {
            i++;
        }
        if (i == n) {
            return true;
        } else {
            return false;
        }
    }
}

//calculate te numver of prime numbers samller than number and print them
printPrimes(number); 

function printPrimes(max) {
    var counter = 0;
    var primes = "";
    var i = 2;
    while(i < max){
        if(isPrime(i)){
            counter++;
            primes += i + " ";
        }
        i++;
    }
    console.log("There are " + counter + " prime numbers smaller than "
     + max + ".");
     if (counter >0 ) {
         console.log(primes);
     }
    
 }