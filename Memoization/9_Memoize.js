function add(){
	function parseArg(n){
		if (Array.isArray(n)) return add.apply(this, n);
		if (typeof n === "function") return parseArg(n());
		return isNaN(n) ? 0 : parseInt(n,10);
	}
	return arguments.length <= 1 ? parseArg(arguments[0]) : parseArg(arguments[0]) + add([].slice.call(arguments, 1));
}


// var cachedTwoValueAdder = memoize(addition);
// cachedTwoValueAdder(10, 20);

function addition() {
	console.log("Inside Addition function");
 	
 	var total = 0;
 	for(var i=0; i<arguments.length; i++) {	
 		total+=arguments[i];
 	}
 	
	return total;
}


function memoize(fn) {
	var cache = {};

	return function() {
		var key = JSON.stringify(arguments);
		if( typeof cache[key] === "undefined")
			cache[key] = fn.apply(this, arguments);
		return cache[key];
	};
}
