// 3 seconds
console.log(1);
setTimeout(function () {
    console.log(2);
}, 3000);
console.log(3);

// 0 seconds
console.log(1);
setTimeout(function () {
    console.log(2);
}, 0);
console.log(3);
