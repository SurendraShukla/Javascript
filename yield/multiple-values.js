function* generatorFoo() {
    yield* ['hello', 'world'];
    yield 1;
    yield 2;
}

function* generatorBar() {
    // First Create the generator object by invoking the function
    // then yield it.
    yield* generatorFoo();
    yield 'I am bar!'
}

var genObj1 = generatorFoo();
// Iterate on the generator object directly
console.log(genObj1.next().value); // Prints hello
console.log(genObj1.next().value); // Prints world
console.log(genObj1.next().value); // Prints 1
console.log(genObj1.next().value); // Prints 2


var genObj2 = generatorBar();
// Iterate on the generator object directly that in itself yields
// the values of another generator
console.log(genObj2.next().value); // Prints hello
console.log(genObj2.next().value); // Prints world
console.log(genObj2.next().value); // Prints 1
console.log(genObj2.next().value); // Prints 2
console.log(genObj2.next().value); // Prints I am bar!