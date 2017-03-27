exports = (typeof window === 'undefined') ? global : window;

exports.regexAnswers = {
  containsNumber : function(str) {
    return (str.match(/\d/g) ) ? true : false;
  },

  containsRepeatingLetter : function(str) {
    return str.match(/([a-z])\1/ig) ? true : false;
  },

  endsWithVowel : function(str) {
    return (str.match(/[AEIOU]$/ig) ) ? true : false;
  },

  captureThreeNumbers : function(str) {
    return ((resultArray = str.match(/\d{3}/g)) != undefined) ? resultArray[0] : false;
  },

  matchesPattern : function(str) {
    return (str.match(/^\d{3}\-\d{3}\-\d{4}$/g)) ? true : false;
  },
  isUSD : function(str) {
    return (str.match(/^\$\d{1,3}(\,\d{3})*(\.\d{2})?$/ig) ) ? true : false;
  }
};
