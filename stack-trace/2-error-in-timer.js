// 3 seconds
console.log(1);
setTimeout(function () {
    console.log(2);
}, 3000);
// console.log(3);



// console.log(1);
setTimeout(function () {
    // console.log(4);
    console.log(new Error().stack);
}, 0);
console.log(3);

console.log(new Error().stack);
