
//given FIXED array
var x = [15, 7, 8, 1]

//given DYNAMIC array

var y = [4, 6, 8, 10, 12]

// find the biggest number in the given fixed array

function biggestNrFixed() {
    var a = x[0] > x[1] ? x[0] : x[1];
    var b = a > x[2] ? a : x[2];
    var c = b > x[3] ? b : x[3];
    console.info('The biggest number in this array is ', c);

}
// biggestNrFixed();

// find the biggest number in the given dynamic array
function sortAscendingDynamic() {
    var sortaD = y.sort(function (a, b) {
        return b - a
    })

    console.log('the biggest number is ', sortaD[0])
}

// sortAscendingDynamic();


// find the smallest number in the given fixed array

function smallestNrFixed() {
    var a = x[0] < x[1] ? x[0] : x[1];
    var b = a < x[2] ? a : x[2];
    var c = b < x[3] ? b : x[3]
    console.info('The smallest number in this array is ', c);
}

// smallestNrFixed();

//find the smallest nnumber in the given dynamic array

function sortDescendingDynamic() {
    var sortdD = y.sort(function (a, b) {
        return a - b
    })

    console.log('the smallest number is ', sortdD[0])
}

// sortDescendingDynamic();

//TODO sort ascending fixed

function sortAscendingFixed() {
    var a = x[0];
    var b = x[1];
    var c = x[2];
    var d = x[3];

    if (x[0] > x[1]) {
        x[1] = x[0]
        x[0] = b;

    }

    if (x[1] > x[2]) {
        x[2] = x[1];
        x[1] = c;
    }

    if (x[2] > x[3]){
        x[3] = x[2]
        x[2] = d;
    }


    console.log('x0 is ', x[0]);
    console.log('x1 is ', x[1]);
    console.log('x2 is ', x[2]);
    console.log('x3 is ', x[3]);

    // console.log('Sort ascending fixed array: ', x)
}
sortAscendingFixed();

//min or max in an array

function findMinNumber(array){
   
    var min = array[0];
    array.forEach(function(nr){
        if (min > nr){
            min = nr 
        }
    })
    console.info('min= ', min);
}
var array = [-4, 5, 3, 2, 6, 1, 9];
// findMinNumber(array);

var array2 = [5, 3, 0, 2, 6, 1, 9];
// findMinNumber(array2);

// findMinNumber([3, 5, 2, 7, 9]);



function findMinNumber2(){
    var array = [5, 3, 2, 6, 1, 9]
    var min = array[0];
    for(var i = 1; i < array.length; i++){
        if(min > array[i]){
            min = array[i];
        }
    }
    console.info('min = ', min);
}

// findMinNumber2();

//==============sort an array(bubble sort)=============

function sortAsc(array){
    console.warn('sorting: ', array);
    // array.sort();
    for(var j = 0; j < array.length ; j++){
        for(var i = 0 ; i < array.length - 1 - j; i++){
            console.info('compare ',array[i], array[i+1]);
            if(array[i] > array[i+1]){
                console.info('change.....', i);
                var tmp = array[i];
                array[i] = array[i+1];
                array[i+1] = tmp;
            }
        }
        console.log('intermediary', array, i, j);
    }
    console.info('sorted: ', array);
}
// sortAsc([1, 2, 3, 4, 5]);
// sortAsc([5, 4, 3, 2, 1]);
// sortAsc([1, 3, 2, 5, 4]);



