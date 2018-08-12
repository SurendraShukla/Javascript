var incrementByOne = function (x) { return x + 1; };
console.log(incrementByOne(10));

// with block body, explicit "return" needed
var incrementByOneArrowFunction = x => {return x + 1};
console.log(incrementByOneArrowFunction(10));


var addition = function (x, y) { return x + y; };
console.log(addition(10, 20));

// concise body syntax, implied "return"
var additionArrowFunction = (x, y) => x + y;
console.log(additionArrowFunction(10, 20));


function fun() {
    console.log(this);
}
setTimeout(fun, 100);
setTimeout(() => console.log(this), 100);
