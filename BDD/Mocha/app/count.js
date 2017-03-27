exports = (typeof window === 'undefined') ? global : window;

exports.countAnswers =  {
  count : function (start, end) {

  	for(counter=start; counter<=end; counter++) {
		setDelay(counter);
	}

	function setDelay(i) {
		//console.dir(i);
		return setInterval(function(){
			console.dir(i);
		}, 100);
	}
  }
};
