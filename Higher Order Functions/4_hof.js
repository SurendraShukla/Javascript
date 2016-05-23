function isAboveAgeX(MIN, age) {
	return age > MIN;
}


function isAboveAge(MIN) {
  return function(age) { return age > MIN; };
}

var isAdult = isAboveAge(18);
isAdult(20);

var isSenior = isAboveAge(65);
isSenior(20);

isAboveAge(18)(20)
