
var a=1;
function fun() {
    //var a=2;
    this.a=3;

    this.innerFun1 = function () {
        console.log('a=['+this.a+']');
    };
}
//
// fun();
// innerFun1();
// a=4;
// innerFun1();

var obj = new fun();
console.log('a=['+obj.a+']');
obj.innerFun1();
a=30;
obj.innerFun1();


