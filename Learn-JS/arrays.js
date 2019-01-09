
//given FIXED array
var x = [101, 64, 23, 56]

//given DYNAMIC array

var y = [4, 6, 8, 10, 12]

// find the biggest number in the given fixed array

function biggestNrFixed (){
    var a = x[0] > x[1] ? x[0] : x[1];
    var b = a > x[2] ? a : x[2];
    var c = b > x[3] ? b : x[3];
    console.info('The biggest number in this array is ', c);
    
}
// biggestNrFixed();

// find the biggest number in the given dynamic array
function sortAscendingDynamic(){
    var sortaD = y.sort(function(a, b){
        return b-a
    })

    console.log('the biggest number is ' , sortaD[0])
}

// sortAscendingDynamic();


// find the smallest number in the given fixed array

function smallestNrFixed (){
    var a = x[0] < x[1] ? x[0] : x[1];
    var b = a < x[2] ? a : x[2];
    var c = b < x[3] ? b : x[3]
    console.info('The smallest number in this array is ', c);
}

// smallestNrFixed();

//find the smallest nnumber in the given dynamic array

function sortDescendingDynamic(){
    var sortdD = y.sort(function(a, b){
        return a-b
    })

    console.log('the smallest number is ' , sortdD[0])
}

// sortDescendingDynamic();

//TODO sort ascending fixed

function sortAscendingFixed(){
    var a = x[0];
    var b = x[1];
    var c = x[2];
    var d = x[3];

   if (x[0] > x[1]){
       x[0] = b;
       x[1] = a;
       
   }
  

   if(x[1] > x[2]){
       x[1] = c;
       x[2] = b;
   }
    console.log('x0 is ', x[0]);
    console.log('x1 is ', x[1]);
    console.log('x2 is ', x[2]);
    
    // console.log('Sort ascending fixed array: ', x)
}
sortAscendingFixed();


//sort ascending dynamic

function sortAscending(){
    var sorta = y.sort(
        function(a, b){
            return a-b
        }
    )
    console.log('Sort ascending: ', sorta)
}
// sortAscending();

//sort descending dynamic

function sortDescending(){
    var sortd = y.sort(function(a, b){
        return b-a
    })
    console.log('Sort descending ', sortd)
}
// sortDescending();