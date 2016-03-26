var memo = [0, 1];

var fibonacci = function (n) {
	var result = memo[n];
	if (typeof result !== 'number') {
		result = fibonacci(n - 1) + fibonacci(n - 2);
		memo[n] = result;
	}
	return result;
};


// Try for below and see response time
// fibonacci(35);
// fibonacci(100);
