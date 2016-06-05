function isAboveAgeX(MIN, age) {
	return age > MIN;
}
isAboveAgeX(18, 20);
isAboveAgeX(65, 20);

function isAboveAge(MIN) {
  return function(age) { return age > MIN; };
}

var isAdult = isAboveAge(18);
isAdult(20);

var isSenior = isAboveAge(65);
isSenior(20);

isAboveAge(18)(20)
