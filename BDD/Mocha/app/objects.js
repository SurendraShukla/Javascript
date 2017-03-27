exports = (typeof window === 'undefined') ? global : window;

exports.objectsAnswers =  {
  alterContext : function(fn, obj) {
  	return fn.apply(obj, []);
  	//return fn.call(obj, {});
  },

  alterObjects : function(constructor, greeting) {
  	constructor.prototype.greeting = greeting;
  },

  iterate : function(obj) {
  	var arr=[];
  	Object.getOwnPropertyNames(obj).forEach(function(val, idx, array) {
  		arr[idx] = val + ': ' + obj[val];
  	});
  	return arr;
  }
};
