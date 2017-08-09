/*
* Usable only when used with yield*
* */
function* greet1() {
    yield 'hello';
    yield 'world';
    return 1;
}

function* greet2() {
    // The result of invoking yield* is the return value.
    var returnValue = yield* greet1();
    console.log(returnValue);
}


for (let message of greet1()) {
    console.log(message);
}

for (let message of greet2()) {
    console.log(message);
}