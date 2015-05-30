function foo() {
	console.log("x=["+x+"] y=["+y+"]");
	if (false) {
		var x = 1;
	}
	return;
	var y = 1;
}
foo();
