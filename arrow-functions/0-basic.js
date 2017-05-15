var incrementByOne = function (x) { return x + 1; };
var addition = function (x, y) { return x + y; };

console.log(incrementByOne(10));
console.log(addition(10, 20));

var incrementByOneArrowFunction = x => x + 1;
var additionArrowFunction = (x, y) => x + y;

console.log(incrementByOneArrowFunction(10));
console.log(additionArrowFunction(10, 20));

function fun() {
    console.log(this);
}
setTimeout(fun, 100);
setTimeout(() => console.log(this), 100);
