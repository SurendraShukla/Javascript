var a =1;	// Local/Private : Function
this.b =2;	// Privileged	: Object
c = 3;		// Global		: Window

console.log("Without this keyword: a=["+a+"] b=["+b+"] c=["+c+"]");
console.log("With this keyword: a=["+this.a+"] b=["+this.b+"] c=["+this.c+"]");

console.log("x=["+y+"]");

var x =10;	// Local/Private
this.y =20;	// Privileged
z = 30;		// Global

