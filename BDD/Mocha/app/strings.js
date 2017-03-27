exports = (typeof window === 'undefined') ? global : window;

exports.stringsAnswers = {
  reduceString: function(str, amount) {
  	//var matchedStrArr = str.match(/([a-z])\1{0,1}/g);
  	var returnStr = '', oldChar = '', strLen = str.length;

  	for(var index=0; index<strLen; index++) {

  		var curChar = str.charAt(index);
  		
  		// Track changes of characters
  		if(oldChar != curChar) {
  			oldChar = curChar;
  			addCount= amount;
  		}

  		//Allow max characters to be specified by amount
  		if(addCount>0) {
  			returnStr+=""+curChar;
  			addCount--;
  		}
  	}
  	return returnStr;


  },
  wordWrap: function(str, cols) {
  	var returnStr=[], prevStr='';

    str.split(' ').forEach(function(element, index) {

      tmpStr = prevStr+element;

      if(tmpStr.length>cols) {

        if(prevStr) {
          var str = prevStr.slice(0, -1)+"\n";
          returnStr.push(str);
          prevStr=element+" ";
        }else{
        //if(element.length>cols) {
          returnStr.push(element+"\n");
        }

      }else{
        prevStr+=element+" ";
      }

    });

    if(prevStr) {
      var str = prevStr.slice(0, -1);
      returnStr.push(str);
    }

  	return returnStr.join('');


  },
  reverseString: function(str) {
  	return str.split('').reverse().join('');
  }
};
