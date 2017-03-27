exports = (typeof window === 'undefined') ? global : window;

exports.recursionAnswers = {
  listFiles: function(data, dirName) {

    listFilesRecursion(data, undefined, dirName);
    return recursionAnswers.listFiles.prototype.finalArray;

    function listFilesRecursion(data, dirName, originalDirName) {

      var fileListArr=[], tmpFileListArr;

      if(Array.isArray(data)) {
        data.forEach(function(element, index){
          if(typeof element == "object") {
            tmpFileListArr = listFilesRecursion(element.files, element.dir, originalDirName);
            fileListArr = fileListArr.concat(tmpFileListArr);
          }else{
            fileListArr.push(element);
          }
        });
      }else{
        tmpFileListArr = listFilesRecursion(data.files, data.dir, originalDirName);
        fileListArr = fileListArr.concat(tmpFileListArr);
      }

      if(dirName == originalDirName) {
        recursionAnswers.listFiles.prototype.finalArray = fileListArr;
      }
      return fileListArr;

    }

  },

  permute: function(arr) {

    var returnArr=[];

    getUniquePermutation(0, (arr.length-1));

    function getUniquePermutation(start, end) {

        if(start == end) {
          returnArr.push(arr.slice());
          return;
        }
        for(var counter=start; counter<=end; counter++) {
            swap(start, counter);
            getUniquePermutation((start+1), end);
            swap(counter, start);
        }

    }

    function swap(index1, index2) {
        var tmp = arr[index1];
        arr[index1] = arr[index2];
        arr[index2] = tmp; 
    }

    return returnArr;


  },

  fibonacci: function(n) {
    return (n === 0 || n === 1) ? n : (recursionAnswers.fibonacci(n - 1) + recursionAnswers.fibonacci(n - 2));
  },

  validParentheses: function(n) {
  }
};
