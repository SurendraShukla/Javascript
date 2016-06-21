function tracker() {
	var x=1;
	return function() { x+=1; console.log(x); };
}

var incrementAndPrintTracker = tracker();
incrementAndPrintTracker();