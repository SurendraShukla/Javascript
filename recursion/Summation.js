function getSummation(no) {
	return (no==1) ? no : no+getSummation(--no);
}

// 1
getSummation(1);

// 3
getSummation(2);

// 6
getSummation(3);

// 10
getSummation(4);

// 15
getSummation(5);

// 55
getSummation(10);