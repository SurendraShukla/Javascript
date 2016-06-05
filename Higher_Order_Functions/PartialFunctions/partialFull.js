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

function add(a, b) {
    return a + b;
}

var alwaysNine = partial(add, 4, 5);
alwaysNine();     // 9
alwaysNine(1);    // 9 - this is just like calling add(4, 5, 1)
alwaysNine(9001); // 9 - this is just like calling add(4, 5, 9001)
