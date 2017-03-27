exports = (typeof window === 'undefined') ? global : window;

exports.functionsAnswers = {
  argsAsArray : function(fn, arr) {
    return fn.apply(fn,arr);
  },

  speak : function(fn, obj) {
    return fn.call(obj, arguments);
  },

  functionFunction : function(str) {
    return function(greeting) {
      return str+", "+greeting;
    }
  },

  makeClosures : function(arr, fn) {
    var returnFun = [];
    for(var i=0;i<arr.length;i++) {
      (function(val){
        var tmpFun = function(){
          return fn(val);
        }
        returnFun.push(tmpFun);
      })(arr[i]);
    }
    return returnFun;
  },

  partial : function(fn, str1, str2) {
    return function(punctuation) {
      return fn(str1, str2, punctuation);
    }
  },

  useArguments : function() {
    var total=0;
    for(var i=0; i<arguments.length;i++) {
      total+=arguments[i];
    }
    return total;
  },

  callIt : function(fn) {
     // use splice to get all the arguments after 'fn'
    var args = Array.prototype.splice.call(arguments, 1);
    fn.apply(null, args);
  },

  partialUsingArguments : function(fn) {
    var outerArgs = Array.prototype.slice.call(arguments, 1);
    return function() {
      innerArgs = Array.prototype.slice.call(arguments);
      return fn.apply(null, outerArgs.concat(innerArgs));
    }
  },

  curryIt : function(fn) {
    return function(a) {
      return function(b){
        return function(c){
          return fn(a,b,c);
        }
      }
    }
  }
};
