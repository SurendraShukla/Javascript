// IIFE outside any function
(function() {
    console.log(this); // Output: Window object
})();


// IIFE inside an object function
var obj = {};

var someFunc = function() {
    console.log('Functions this');
    console.log(this === obj);
    console.log('++++++++++++++++++++++++++');

    // IIFE
    (function() {
        console.log('IIFE this');
        console.log(this); // Output: Window object
        console.log('IIFE');
    })();
};

obj.func = someFunc;

obj.func();


