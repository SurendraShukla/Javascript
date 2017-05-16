var a=1, b=2, c=3;

function fun1() {
	var a=10;
	this.b=20;
	c=30;

	var innerFun1 = function() {
		console.log("innerFun1: a=["+a+"] this.a=["+this.a+"]");
		console.log("innerFun1: b=["+b+"] this.b=["+this.b+"]");
		console.log("innerFun1: c=["+c+"] this.c=["+this.c+"]");
	}

	this.innerFun2 = function() {
		console.log("innerFun2: a=["+a+"] this.a=["+this.a+"]");
		console.log("innerFun2: b=["+b+"] this.b=["+this.b+"]");
		console.log("innerFun2: c=["+c+"] this.c=["+this.c+"]");
	}

	innerFun3 = function () {
		console.log("innerFun3: a=["+a+"] this.a=["+this.a+"]");
		console.log("innerFun3: b=["+b+"] this.b=["+this.b+"]");
		console.log("innerFun3: c=["+c+"] this.c=["+this.c+"]");
	}

}

//fun1();
//innerFun1();
//innerFun2();
//innerFun3();
//b=25;
//c=35;
//innerFun2();
//innerFun3();

//var obj1 = new fun1();
//obj1.innerFun1();
//obj1.innerFun2();
//obj1.innerFun3();
//innerFun3();
//console.log("a=["+a+"] b=["+b+"] c=["+c+"]");
//b=25;
//c=35;
//obj1.innerFun2();
//console.log("a=["+a+"] b=["+b+"] c=["+c+"]");
//innerFun3();
