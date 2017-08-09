/*
* [rv] = yield [expression];
*
* Yield keyword actually returns an IteratorResult object with two properties, value and done.
*       The value property is the result of evaluating the yield expression.
*       done is false, indicating that the generator function has not fully completed.
*
* The end of the generator function is reached;
*       IteratorResult is returned to the caller in which the value is undefined and done is true.
*
* Yield key­word can be used as both — a data consumer and a data producer.
* */

function* doSomething() {
    // This sends 'hello' to the caller and pauses execution
    // of this function until next() is invoked
    var firstInput = yield 'hello';

    // This sends 'world' to the caller and pauses execution
    // of this function until next() is invoked
    // Notice the two-way communication happening at this point
    var lastInput = yield 'world';

    console.log(lastInput);
}

var gen2 = doSomething();
// This prints out the value returned at the first yield and pauses
console.log(gen2.next().value); // Prints 'hello'

// This resumes execution after the first yield until the next
// yield is encountered
console.log(gen2.next().value); // Prints 'world'

// This resumes execution after the second yield but there is
// nothing more to execute
gen2.next('The end.');

