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

function hex(r, g, b) {
    return '#' + r + g + b;
}

hex('11', '22', '33'); // "#112233"

// A more visually-appealing placeholder.
var __ = partialAny._;

var redMax = partialAny(hex, 'ff', __, __);
redMax('11', '22');    // "#ff1122"

var greenMax = partialAny(hex, __, 'ff');
greenMax('33', '44');  // "#33ff44"

var blueMax = partialAny(hex, __, __, 'ff');
blueMax('55', '66');   // "#5566ff"

var magentaMax = partialAny(hex, 'ff', __, 'ff');
magentaMax('77');      // "#ff77ff"
