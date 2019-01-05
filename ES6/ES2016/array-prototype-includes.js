let numbers = [1, 2, 3, 4];
if(numbers.includes(2)) {
    console.log('Array contains value');
}
let numbers = [1, 2, 3, 4, NaN];
console.log(numbers.indexOf(NaN)); //Prints -1
console.log(numbers.includes(NaN)); //Prints true
