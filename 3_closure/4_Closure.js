// Factory Method/Closure 
function getAdder() {
	return function (x, y) {
		return x+y;
	}
}

var adder = getAdder();
adder(100, 200);
getAdder()(100, 200);