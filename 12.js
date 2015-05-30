/*
obj3 = { "a": 10, "b" : 20};
*/
function outerFun() {
	var a = 10;
	
	this.setVar = function(val) {
		a=val;
	}
	
	this.logVar = function() {
		console.log(a);
	}
	
	return function() {
		console.log("a:"+a);	
	}
}

//var testFun = outerFun();
//testFun(1);
//logVar();
//a=20;
//logVar();
//setVar(20);
//logVar();
//console.log("a=["+a+"]");


//var obj4 = new outerFun();
//obj4();	
//obj4.setVar("30");
//setVar("40");
//logVar();
