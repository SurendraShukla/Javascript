
console.log(1);
setTimeout(function () {
    console.log(2);
}, 3000);
console.log(3);

// console.log(1);
setTimeout(function () {
    console.log(4);
}, 0);
console.log(5);
