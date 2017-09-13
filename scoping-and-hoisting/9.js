var a = 1;
function b() {
    console.log(a);
	a = 10;
	console.log(a);
	return;
	function a() {console.log('inside function');}
}
b();
// console.log(a);