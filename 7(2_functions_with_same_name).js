"use strict";
function printArgs(x, y) {
	console.log('inside 2 param function');
	for(var index in arguments) {
		console.log(arguments[index]);
	}
}
function printArgs(x, y, z) {
	console.log('inside 3 param function');
	for(var index in arguments) {
		console.log(arguments[index]);
	}
}
printArgs('1', '2');
printArgs('1', '2', '3');
