var memo = [0, 1];

var factorial = function (n) {
	var result = memo[n];
	if (typeof result !== 'number') {
		result = n*factorial(n - 1);
		memo[n] = result;
	}
	return result;
};


// Try for below and see response time
// factorial(35);
// factorial(100);
