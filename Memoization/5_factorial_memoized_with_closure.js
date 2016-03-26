var fibonacci = (function ( ) {

	var memo = [0, 1];

	var recur = function (n) {
		var result = memo[n];
		if (typeof result !== 'number') {
			result = recur(n - 1) + recur(n - 2);
			memo[n] = result;
		}
		return result;
	};

	return recur;

}( ));


// Try for below and see response time
// fibonacci(35);
// fibonacci(100);