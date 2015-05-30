var a=1;
function fun1() {
	//var a=2;
	this.a=3;
	
	this.innerFun1 = function () {
		console.log("a=["+this.a+"]");
	}
}

/*
fun1();
innerFun1();
a=4;
innerFun1();
*/

obj = new fun1();
console.log("a=["+obj.a+"]");
obj.innerFun1();
a=30;
obj.innerFun1();
