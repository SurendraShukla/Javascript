var maxNumber = 21;
var primeInfoList = [];


for(var number=1; number<maxNumber; number++) {
	primeInfoList[number] = isPrimeNo(number); 
}

console.log(primeInfoList);


function isPrimeNo(no) {
	for(var counter=2; counter<=no/2; counter++) {
		if(no%counter==0) return false;
	}
	return true;
}
