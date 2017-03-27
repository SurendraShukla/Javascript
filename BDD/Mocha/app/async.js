exports = (typeof window === 'undefined') ? global : window;

exports.asyncAnswers = {

  async : function(value) {
  	
  	var promise = new Promise(function(resolve, reject) {
	  resolve(value);
	});
	return promise;

  },

  manipulateRemoteData : function(url) {

	var remoteDataParserAndResolveCaller = function(callbackFunction, obj) {
		var returnArr=[];
		for (var key in obj) returnArr.push(obj[key]['name']);
		callbackFunction(returnArr.sort());
	}

	var promise = new Promise(function(resolve, reject) {

		var request = new XMLHttpRequest();

		request.open('GET', url);
		request.onload = function() {
		  if (request.status == 200) remoteDataParserAndResolveCaller(resolve, JSON.parse(request.response)["people"]);
		};
		request.send(); //send the request

	});

  	return promise;
  }

};
