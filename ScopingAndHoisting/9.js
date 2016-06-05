function foo() {
	if (false) {
		var x = 1;
	}
	return;
	var y = 1;
}

var a = 1;
function b() {
	a = 10;
	//console.log(a);
	return;
	function a() {console.log('inside function');}
}
b();
console.log(a);