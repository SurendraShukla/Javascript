// Revealing Pattern

function ClosureFun() {

	var x =1;
	
	var privateFun = function(val) {
		x = val;
	}
	
	function setPrivateVal(val) {
		privateFun(val);
	}
	
	function getPrivateVal() {
		console.log(x);
	}
	
	return {setter : setPrivateVal,  getter: getPrivateVal};
	
}