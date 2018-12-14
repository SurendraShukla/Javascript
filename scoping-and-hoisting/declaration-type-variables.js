var a = 1;	// Local/Private: Function
let b = 2;  // Local/Private: Block
this.c= 3;	// Privileged	: Object
d = 4;		// Global		: Window

console.log('Without this keyword: a=['+ a +'] b=['+ b +'] c=['+ c +'] d=['+ d + ']');
console.log('With this keyword: a=['+this.a+'] b=['+this.b+'] c=['+this.c+'] d=['+ this.d + ']');

// console.log('x=['+ x +']');

var w =10;	// Local/Private
let x =10;  // Local/Private
this.y =20;	// Privileged
z = 30;		// Global

