function adder(x){
	
	/*
	var innerFun = function () {
		console.log('inside innerFun');
	}
	*/
	return function(y){
		//innerFun();
		return x + y;
	}
};

var five_adder = adder(5);

var result = five_adder(7);
console.log(result);

var nine_adder = adder(9);
result = nine_adder(10);
console.log(result);

result = five_adder(7);
console.log(result);
