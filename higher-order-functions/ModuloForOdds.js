
var modulo = function(divisor) {
    return function(dividend) {
        return dividend % divisor;
    }
};

var isOdd = modulo(2);
isOdd(6);
isOdd(5);

// [1,2,3,4,5].filter(isOdd);

var filter = function(fn){
    return function(arr) {
        return arr.filter(fn);
    }
};

// Useful utility function that returns all the odd numbers in an array
var getTheOdds = filter(isOdd);
getTheOdds([1,2,3,4,5]);

// Another way of calling
filter(isOdd)([1,2,3,4,5]);

