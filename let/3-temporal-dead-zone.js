function do_something() {
    console.log(bar); // undefined
    console.log(foo); // ReferenceError

    // prints out 'undefined'
    console.log(typeof bar);
    // results in a 'ReferenceError'
    console.log(typeof i);
    var bar = 1;
    let foo = 2;
}
