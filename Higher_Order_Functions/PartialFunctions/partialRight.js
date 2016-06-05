function partialRight(fn /*, args...*/) {
    // A reference to the Array#slice method.
    var slice = Array.prototype.slice;
    // Convert arguments object to an array, removing the first argument.
    var args = slice.call(arguments, 1);

    return function() {
        // Invoke the originally-specified function, passing in all just-
        // specified arguments, followed by any originally-specified arguments.
        return fn.apply(this, slice.call(arguments, 0).concat(args));
    };
}


function wedgie(a, b) {
    return a + ' gives ' + b + ' a wedgie.';
}
//
//var joeGivesWedgie = partial(wedgie, 'Joe');
//joeGivesWedgie('Ron');    // "Joe gives Ron a wedgie."
//joeGivesWedgie('Bob');    // "Joe gives Bob a wedgie."

var joeReceivesWedgie = partialRight(wedgie, 'Joe');
joeReceivesWedgie('Ron', 'Gampesh'); // "Ron gives Gampesh a wedgie."
joeReceivesWedgie('Bob'); // "Bob gives Joe a wedgie."