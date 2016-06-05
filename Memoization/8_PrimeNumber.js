
var isPrime = function() {
	
	var cache = {};	
	
	function checkPrime(n) {
		console.log("Inside isPrime function");
	 
	 	if(n<3) return true;
		for(i=3; i<=(n/2); i++) 
			if( n% i == 0 ) return false;
		return true;
	}
	
	return function(n) {
		if( typeof cache[n] === "undefined")
			cache[n] = checkPrime(n);
		return cache[n];
	};
	

}();