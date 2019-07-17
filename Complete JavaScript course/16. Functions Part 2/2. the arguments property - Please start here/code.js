var add = function(x, y, z) {
    console.log(arguments);
    console.log(arguments.length);
    console.log(arguments[1]);
    if (arguments.length == 0) {
        console.log("Input arguments");
    }

    x = x || 0;
    y = y || 0;
    z = z || 0;

    return x+y+z;
};

var sum = add(1, 2, 3, 4);
console.log(sum);
