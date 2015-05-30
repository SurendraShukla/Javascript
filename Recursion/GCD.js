function getGCD(no1, no2) { 
	return ( (no1 % no2) ==0) ? no2 : getGCD(no2, (no1 % no2));
}

// 1
console.log(getGCD(1, 1));
// 4
console.log(getGCD(12, 8));
// 6
console.log(getGCD(18, 84));
// 6
console.log(getGCD(48, 18));
// 12
console.log(getGCD(48, 180));
// 1
console.log(getGCD(9, 28));