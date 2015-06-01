function add(a){
	function parseArg(n){
		if (Array.isArray(n)) {
			//return add.apply(null, n);
			return add(n);
		}
		if (typeof n === "function") return parseArg(n());
		return isNaN(n) ? 0 : parseInt(n,10);
	}
	
	return arguments.length <= 1 
	? parseArg(a) 
	: parseArg(a) 
		+ add([].slice.call(arguments, 1));
}