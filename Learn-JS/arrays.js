
//given array
var x = [1001, 8, 111, 56]

// find the biggest number in the given array

function biggestNr (){
    var a = x[0] > x[1] ? x[0] : x[1];
    var b = a > x[2] ? a : x[2];
    var c = b > x[3] ? b : x[3];
    console.info('The biggest number in this array is ', c);
    
}
biggestNr();

// find the biggest number in the given array

function smallestNr (){
    var a = x[0] < x[1] ? x[0] : x[1];
    var b = a < x[2] ? a : x[2];
    var c = b < x[3] ? b : x[3]
    console.info('The smallest number in this array is ', c);
}

smallestNr();

//sort ascending

function sortAscending(){
    var sorta = x.sort(
        function(a, b){
            return a-b
        }
    )
    console.log('Sort ascending: ', sorta)
}
sortAscending();

//sort descending

function sortDescending(){
    var sortd = x.sort(function(a, b){
        return b-a
    })
    console.log('Sort descending ', sortd)
}
sortDescending();