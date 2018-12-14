/**
 * 
 */

/**
 * Problem without closure
 */
for (var i = 1; i <= 5; i++) {

    setTimeout(function () {
        console.log(i);
    }, 0);

    setTimeout(function (i) {
        console.log(i);
    }, 0);

}


/**
 * LET - Solves this by creating closure
 *
 */
for (let i = 1; i <= 5; i++) {

    setTimeout(function () {
        console.log(i);
    }, 0);

    setTimeout(function (i) {
        console.log(i);
    }, 0);
}




/**
 * Old way creating closure and solving problem
 */
function callback(no) {
    return function () {
        console.log(no + "\t Referring Closure (function) values, instead of Global - Callback");
    }
}
for (var i = 1; i <= 5; i++) {

    (function (i) {
        setTimeout(function () {
            console.log(i + "\t Referring Closure (function) values, instead of Global - IIFE");
        }, 0);
    })(i);

    setTimeout(callback(i), 0);

}



/**
 * Pass an argument to callback function from setTimeout
 */
for (var i = 1; i <= 5; i++) {

    setTimeout(function (i) {
        console.log(i + "\t Referring to arguement which is not passed");
    }, 0);

    setTimeout(function (i) {
        console.log(i + "\t Referring to arguement which is passed");
    }, 0, i);

}


//
//
