exports = (typeof window === 'undefined') ? global : window;

exports.numbersAnswers = {
  valueAtBit: function(num, bit) {
  	return num >> (bit-1) & 1;
  },

  base10: function(str) {
  	/*
  	var arr = str.split('');
  	var strLen = arr.length-1;
  	var value = 0;
  	for(var counter=strLen; counter>=0; counter--) {
  		if(arr[counter] == 1) {
  			value+= Math.pow(2, (strLen-counter)); 
  		}
  	}
  	return value;*/
  	return parseInt(str, 2);
  },

  convertToBinary: function(num) {
  	var returnArr=[], counter=8;
  	while(counter-- != 0) {
  		returnArr.push(num%2);
  		num = Math.floor(num/2);
  	}
  	return returnArr.reverse().join('');
  },

  multiply: function(a, b) {
    var commonMultiplier = 10000;

    // Convert number into integer
    a *= commonMultiplier;
    b *= commonMultiplier;

    return (a * b) / (commonMultiplier * commonMultiplier);
  }
};
