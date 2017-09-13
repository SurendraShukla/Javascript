function BaseFunction() {
	this.a = 1;
	this.innerMethodOfBaseFunction = function() {console.log("inside innerMethodOfBaseFunction")};
}

var parent = new BaseFunction();

function ChildFunction() {
	this.b = 2;
	this.innerMethodOfChildFunction = function() {console.log("inside innerMethodOfChildFunction")};
}

var child = new ChildFunction();

function GrandChildFunction() {
	this.c = 3;
	this.innerMethodOfGrandChild = function() {console.log("inside innerMethodOfGrandChild")};
}

var grandChild = new GrandChildFunction();
console.log(grandChild);
