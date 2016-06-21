//Create an object and assign it to a variable "spinner"

// Module Pattern
var spinner = (function(){
	var count = 0;
	function increment(){
		return ++count;
	}
	function decrement(){
		return --count;
	}
	return {
		up : increment,
		down : decrement
	}
})()//;



// The created object should exihibit the following behaviour
spinner.up() // => 1
spinner.up() // => 2
spinner.up() // => 3
spinner.up() // => 4

spinner.down() // => 3
spinner.down() // => 2
spinner.down() // => 1
spinner.down() // => 0
spinner.down() // => -1

