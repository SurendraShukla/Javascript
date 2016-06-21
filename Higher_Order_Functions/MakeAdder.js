// More general function.
// #1
function add(a, b) {
    return a + b;
}
add(1, 1);

// #2
var value=1;
add(value, 2);


// #3
// More specific functions.
function addTen(b) {
    return add(10, b);
}
addTen(100);


// #4
// More specific function generator.
function makeAdder(a) {
    return function(b) {
        return a + b;
    };
}

plusOne = makeAdder(1);
increment=makeAdder(1);
incrementBy2= makeAdder(2);
incrementBy3= makeAdder(3);


