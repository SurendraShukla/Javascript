function negate(fn) {
	return function(x) {
		return -fn(x);
	}
}

function double(fn) {
	return function(x) {
		return 2*fn(x);
	}
}

function square(fn) {
	return function(x){ 
		return fn(x)*fn(x);
	}
}

function identity(val) {
	return val;
}


negate(double(square(identity)))(2);
//identity(2);
//square(identity)(2);
//double(square(identity))(2);


