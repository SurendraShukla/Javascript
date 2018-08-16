function fact(no) { 
	return (1==no) ? no : no*fact(--no);
}

// 1
console.log(fact(1));
// 2
console.log(fact(2));
// 6
console.log(fact(3));
// 24
console.log(fact(4));
// 120
console.log(fact(5));
// 720
console.log(fact(6));