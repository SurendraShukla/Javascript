//Variable defined in global scope
var val = 37;

var myObj = {
    val : 10
}

var someFunction = function(){
    console.log(this.val);
    console.log(window.val);
    console.log(this === myObj);
    console.log(this);
    console.log(this === window);
}

someFunction();

myObj.objectFunc = someFunction;
myObj.objectFunc();

