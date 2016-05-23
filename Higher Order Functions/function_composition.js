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

function indentity(val) {
	return val;
}

//indentity(2);
//square(indentity)(2);
//double(square(indentity))(2);
//negate(double(square(indentity)))(2);

