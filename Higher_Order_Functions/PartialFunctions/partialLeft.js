function partial(fn /*, args...*/) {
    // A reference to the Array#slice method.
    var slice = Array.prototype.slice;
    // Convert arguments object to an array, removing the first argument.
    var args = slice.call(arguments, 1);

    return function() {
        // Invoke the originally-specified function, passing in all originally-
        // specified arguments, followed by any just-specified arguments.
        return fn.apply(this, args.concat(slice.call(arguments, 0)));
    };
}


// Add all arguments passed in by iterating over the `arguments` object.
function addAllTheThings() {
    var sum = 0;
    for (var i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }
    return sum;
}

addAllTheThings(1, 2);            // 3
addAllTheThings(1, 2, 3);         // 6
addAllTheThings(1, 4, 9, 16, 25); // 55

// More specific functions.
var addOne = partial(addAllTheThings, 1);
addOne()                          // 1
addOne(2);                        // 3
addOne(2, 3);                     // 6
addOne(4, 9, 16, 25);             // 55

var addTen = partial(addAllTheThings, 1, 2, 3, 4);
addTen();                         // 10
addTen(2);                        // 12
addTen(2, 3);                     // 15
addTen(4, 9, 16, 25);             // 64
