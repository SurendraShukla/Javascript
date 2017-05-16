function x() {
	y = 1;   // Throws a ReferenceError in strict mode
	var z = 2;
}

x();

console.log(y); // logs "1"
console.log(z); // Throws a ReferenceError: z is not defined outside x
