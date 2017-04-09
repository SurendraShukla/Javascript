
setTimeout(thirdFunction, 3000);

function firstFunction() {
    secondFunction();
}
function secondFunction() {
    thirdFunction();
}
function thirdFunction() {
    console.log(new Error().stack);
}
firstFunction();

