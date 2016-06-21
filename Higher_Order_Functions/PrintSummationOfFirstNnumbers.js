// Function should expresses the concept of summation rather than only functions that compute particular sums.

function summationOfFirstNnumbers(printFn) {
    return function (formulaFn) {
        return function(no) {
            var total = 0;
            for(var counter=1; counter<=no; counter++) {
                total += formulaFn(counter);
            }
            printFn("Summation : "+total);
        }
    };

}
function identity(val) {
    return val;
}

function square(val) {
    return val*val;
}

function cube(val) {
    return val*val*val;
}

summationOfFirstNnumbers(console.log)(identity)(10);
summationOfFirstNnumbers(console.log)(square)(10);
summationOfFirstNnumbers(console.log)(cube)(10);
