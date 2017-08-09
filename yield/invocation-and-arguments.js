/*
* There are 2 tricky aspects when dealing with generators that lend it some special behaviour.
*       – Invoking a generator function doesn’t execute the function right away.
*       – The first invocation of next() on a generator object does not accept any arguments.
* These two aspect directly impact how and when you pass arguments to a generator.
*
* */
function* player(name) {
    console.log('name received'); // (A)
    var life = 1000;
    yield 'Hello' + name; // (B)
    yield 'You have a life of a ' + life + ' years'; // (C)
}

// Lets create our generator object
// Since our function acceps a name, we need
// to pass this name right away
var p = player('Goku');
// Notice that although it seems like you executed
// the function above, it does not print the console statement
// at line (A)


// Invoking next() for the first time causes
// line (A) to be printed and then
// pauses at line (B).
// Notice how the first next() does not take any argument
console.log(p.next().value); // Prints 'name received' followed by 'Hello Goku'(which is this console log)

// Line (C) gets printed then paused
console.log(p.next().value); // Prints 'You have a life of a 1000 years'

// Nothing more to execute
console.log(p.next().value); // Prints undefined because there isint any next value


