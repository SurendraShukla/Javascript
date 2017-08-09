// function isPalidrome(str) {
//     var strLen = str.length-1;
//     console.log(strLen);
//     for(counter=0; counter<=strLen; counter++) {
//         console.log( str[counter] +"!=="+ str[strLen-counter] );
//         if( str[counter] !== str[strLen-counter] ) {
//             return false;
//         }
//     }
//     return true;
// }
//
// console.log(isPalidrome('nayan'));
// console.log(isPalidrome('nayans'));


//
// function adder(x) {
//     return function (y) {
//         console.log(x+y);
//     }
// }
//
// var varX = 1;
// var incrementByOne = adder(varX);
//
// var varX = 10;
// var varY = 10;
// incrementByOne(varY);



function greeter(obj) {
    return function (name) {
        console.log(obj.type+' ! '+name);
    }
}

var greeterObj = {'type':'Hi'};
var hiTo = greeter(greeterObj);
hiTo('Vijay');

greeterObj.type = 'Hello';
// var greeterObj = {'type':'Hello'};
var personName = 'Tanay';
hiTo(personName);

