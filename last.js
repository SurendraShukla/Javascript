var a = 1;
function b() {
	var a = function() {}
	a = 10;
	return;
	//function a() {}
}
b();
console.log(a);
