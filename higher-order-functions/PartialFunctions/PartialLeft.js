function partialLeft(fn /*, args...*/) {
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


function wedgie(a, b) {
    return a + ' gives ' + b + ' a wedgie.';
}


var joeGivesWedgie = partialLeft(wedgie, 'Joe');
joeGivesWedgie('Ron');    // "Joe gives Ron a wedgie."
joeGivesWedgie('Bob');    // "Joe gives Bob a wedgie."

var joeGivesWedgie = partialLeft(wedgie, 'Joe', 'Suren');
joeGivesWedgie('Ron');    // "Joe gives Suren a wedgie."

