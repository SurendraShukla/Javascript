var x = 0;

function f(){
	var x = y = 1; // x is declared locally. y is not!
}
f();

console.log(x, y);
