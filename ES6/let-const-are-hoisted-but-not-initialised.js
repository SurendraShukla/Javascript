/*
Var is hoisted and initialised with undefined.
Let & Const are hoisted but not initialised. The lexically declared variables however stay uninitialised.
ReferenceError exception is thrown when you try to access it.
 */

x = "global";
// function scope:
(function() {
    x; // not "global"

    // var x;
    let x=1;
    // const x;
}());
// block scope (not for `var`s):
{
    x; // not "global"

    // let x;
    const x=10;
}

x = y = "global";
(function() {
    // start TDZ for y
    x; // undefined
    y; // Reference error: y is not defined

    var x = "local";
    let y = "local"; // declaration ends TDZ for x
}());

// https://stackoverflow.com/questions/31219420/are-variables-declared-with-let-or-const-not-hoisted-in-es6
