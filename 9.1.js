function test() {
	
	foo(); 
	bar(); 
	
	// function expression assigned to local variable 'foo'
	var foo = function () { 
		console.log("inside foo!");
	}
	
	// function declaration, given the name 'bar'
	function bar() {
		console.log("inside bar!");
	}
	
}
test();
