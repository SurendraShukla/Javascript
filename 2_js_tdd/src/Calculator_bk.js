function add(x, y) {
	function parseArg(n) {
		
		if(Array.isArray(n)) return add.apply(this, n);
		
		/*
		//if(Array.isArray(n)){
		if(n instanceof Array) {
			var result = 0;
			for(var index in n) {
				result+=parseArg(n[index]);
			}
			return result;
		}
		*/
		if(typeof n === "function") return parseArg(n());
		return isNaN(n) ? 0 : parseInt(n, 10);
	}
	
	// Wo do this because arguments doesn't have slice method we need to do this 
	// [].slice.call(arguments, 1) 
	// Here we are taking methods of array (which is public) and applying it on argument object
	return arguments.length <= 1 ? parseArg(arguments[0]) : parseArg(arguments[0]) + add([].slice.call(arguments, 1));
	/*
	var total = 0;
	
	for(var index in arguments) {
		total+=parseArg(arguments[index]);
	}
	return total;
	*/
}