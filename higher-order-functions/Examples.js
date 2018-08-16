
// Higher Order Function
setTimeout(function (){ console.log("Hello") }, 3000);

// Can create specific function from general function.
var add=function(a,b) {
    return a + b;
}

// General above age Comparison function
// Function should be able to generate specific function

// Factory function :
// Want a function which accepts a property_name as input and it return a method.
// The return method will accept an object and return property value if object has it
var obj = {id: 6, name : "Pen", cost : 50, units : 70, category : 1};


// Function Composition: Allows lot of compose small functions into large function.
// Enable you to reuse your functions.
var modulo = function(divisor, dividend){
    return dividend % divisor;
};



// Partial Application Vs Curry
// #1
var sendMessage = function(from, to, text) {
    return '@' + to + ': ' + text + ' - ' + from;
};
sendMessage('Surendra', 'DAP Team', 'Hi');

// #2
var rgbCreator = function(red, green, blue, alpha) {
    return 'rgba(' + red + ', ' + green + ', ' + blue + ', ' + alpha + ');';
};
rgbCreator(0,0,0,.5);
// halfOpacity
// shadeOfGrey

