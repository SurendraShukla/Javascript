// Strategy pattern
// Changing functionality goes into new function
// Define a family of algorithms, encapsulate each one, and make them interchangeable. 
// Strategy lets the algorithm vary independently from clients that use it.

var products = [
	{id: 6, name : "Pen", cost : 50, units : 70, category : 1},
	{id: 9, name : "Hen", cost : 80, units : 40, category : 2},
	{id: 3, name : "Ten", cost : 90, units : 90, category : 1},
	{id: 5, name : "Den", cost : 50, units : 50, category : 2},
	{id: 7, name : "Len", cost : 40, units : 30, category : 1},
	{id: 2, name : "Zen", cost : 60, units : 60, category : 1}
];

console.log('Before Filtering');
console.table(products);

console.log('After Filteri');

function filter(){
	var result = [];
	for(var i=0; i<products.length; i++)
		if (products[i].cost > 50)
			result.push(products[i]);
	return result;
}
var allCostlyProducts = filter();
console.table(allCostlyProducts);

//console.table(products);

