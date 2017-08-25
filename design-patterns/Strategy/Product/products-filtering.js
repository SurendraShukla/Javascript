// Function Composition
// when you want to combine functions is function composition.

// Function composition is simply the process of combining two or more 
//	existing functions to create a brand new one specific to your needs. 
// Think of it as a function factory.
// 

var products = [
	{id: 6, name : "Pen", cost : 50, units : 70, category : 1},
	{id: 9, name : "Hen", cost : 80, units : 40, category : 2},
	{id: 3, name : "Ten", cost : 90, units : 90, category : 1},
	{id: 5, name : "Den", cost : 50, units : 50, category : 2},
	{id: 7, name : "Len", cost : 40, units : 30, category : 1},
	{id: 2, name : "Zen", cost : 60, units : 60, category : 1}
];

function print(title, fn){
	console.group(title);
	fn();
	console.groupEnd();
}

print("Default products list", function(){
	console.table(products);	
});

print("Filtering", function(){
	print("All costly products", function(){
		function filter(){
			var result = [];
			for(var i=0; i<products.length; i++)
				if (products[i].cost > 50)
					result.push(products[i]);
			return result;
		}
		var allCostlyProducts = filter();
		console.table(allCostlyProducts);
	});
	print("Generalized filter", function(){
		function filter(list, criteriaFn){
			var result = [];
			for(var i=0; i<list.length; i++)
				if (criteriaFn(list[i]))
					result.push(list[i]);
			return result;
		}
		print("All costly products", function(){
			function costlyProductCriteria(product){
				return product.cost > 50;
			}
			var allCostlyProducts = filter(products, costlyProductCriteria);
			console.table(allCostlyProducts);	
		});

		print("All category 1 products", function(){
			function category1ProductCriteria (product){
				return product.category === 1;
			}
			var allCategory1Products = filter(products, category1ProductCriteria);
			console.table(allCategory1Products);
		});

		print("Function composition [negate]", function(){
			function costlyProductCriteria(product){
				return product.cost > 50;
			}
			
			/*
			function negate(criteria){
				return function(product){
					return !criteria(product);
				}
			}
			var affordableProductCriteria = negate(costlyProductCriteria);
			var allAffordableProducts = filter(products, affordableProductCriteria);
			*/

			function affordableProductCriteria(product){
				return !costlyProductCriteria(product);
			}
			var allAffordableProducts = filter(products, affordableProductCriteria);
			console.table(allAffordableProducts);
		});
		
	});
});