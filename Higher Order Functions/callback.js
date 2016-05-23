function higherOrderFunction(fn) {
	setTimeout(fn, 5000);
}

higherOrderFunction(function (){ console.log("Hello") });