
function salutationPrinter(obj) {
    return function (arr) {
        return function(name){
            return obj.expression + arr[0] +' ' + name;
        }
    }

};


var globalObj = {'expression': 'Hi'};
var globalArr = ['!'];
var hiSalutationPrinter = salutationPrinter(globalObj);
var greetTo = hiSalutationPrinter(globalArr);
console.log(greetTo('Surendra'));

globalObj.expression = 'Bye';
console.log(greetTo('Surendra'));

globalArr[0] = '@';
console.log(greetTo('Surendra'));


