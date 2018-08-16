var partialAny = (function() {
    // A reference to the Array#slice method.
    var slice = Array.prototype.slice;

    // This function will be returned as a result of the IIFE and assigned
    // to the external `partialAny` var.
    function partialAny(fn /*, args...*/) {
        // Convert arguments object to an array, removing the first argument.
        var orig = slice.call(arguments, 1);

        return function() {
            // Convert arguments object to an array.
            var partial = slice.call(arguments, 0);
            var args = [];

            // Iterate over the originally-specified arguments. If the argument
            // was the `partialAny._` placeholder, use the next just-passed-in
            // argument, otherwise use the originally-specified argument.
            for (var i = 0; i < orig.length; i++) {
                args[i] = orig[i] === partialAny._ ? partial.shift() : orig[i];
            }

            // Invoke the originally-specified function, passing in interleaved
            // originally- and just-specified arguments, followed by any remaining
            // just-specified arguments.
            return fn.apply(this, args.concat(partial));
        };
    }

    // This is used as the placeholder argument.
    partialAny._ = {};

    return partialAny;
}());

function rgbCreator(red, green, blue, alpha) {
    return 'rgba(' + red + ',' + green + ', ' + blue + ', ' + alpha + ');';
}

//rgbCreator(204, 160, 29, .9);

// A more visually-appealing placeholder.
var __ = partialAny._;

var halfOpacity = partialAny(rgbCreator, __, __, __,.5);
halfOpacity(204, 160, 29);


var shadeOfGrey = partialAny(rgbCreator, 0, 0, 0, __);
shadeOfGrey(.1);
shadeOfGrey(.9);
