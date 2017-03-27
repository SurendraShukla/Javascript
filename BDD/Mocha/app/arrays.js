exports = (typeof window === 'undefined') ? global : window;

exports.arraysAnswers = {

  indexOf : function(arr, item) {
    return arr.indexOf(item);
  },

  sum : function(arr) {
    return arr.reduce(function(a, b) {
      return a + b;
    });
  },

  remove : function(arr, item) {
    return arr.filter(function(element) {
      return element !== item;
    });
  },

  removeWithoutCopy : function(arr, item) {
    ////
    arr.sort(); 

    var i, len;
    for (i=0, len = arr.length; i < len; i++) {
      if (arr[i] === item) {
        arr.splice(i, 1);
        i = i - 1;
        len = len - 1;
      }
    }
    return arr;
  },

  append : function(arr, item) {
    arr.push(item);
    return arr;
  },

  truncate : function(arr) {
    arr.pop();
    return arr;
  },

  prepend : function(arr, item) {
    arr.unshift(item);
    return arr;
  },

  curtail : function(arr) {
    arr.shift();
    return arr;
  },

  concat : function(arr1, arr2) {
    return arr1.concat(arr2);
  },

  insert : function(arr, item, index) {
    arr.splice(index, 0, item);
    return arr;
  },

  count : function(arr, item) {
    return arr.reduce(function(accumulator, currentVal) {
      return accumulator + (currentVal === item);
    }, 0);
  },

  duplicates : function(arr) {
    return arr.reduce(function(accumulatorArr, currentVal, currentIndex, localArr) {
      if (localArr.indexOf(currentVal) !== currentIndex && accumulatorArr.indexOf(currentVal) < 0) 
        accumulatorArr.push(currentVal); 
      return accumulatorArr;
    }, []);
  },

  square : function(arr) {
    return arr.map(function(num) {
      return num * num;
    });
  },

  findAllOccurrences : function(arr, target) {
    return arr.reduce(function(accumulatorArr, currentVal, currentIndex) {
      if (currentVal === target) {
        accumulatorArr.push(currentIndex);
      }
      return accumulatorArr;
    }, []);
  }
};
