values = ['{([])}','{([)]}','{[}'];
console.log(Braces(values));

function Braces(values) {
    var outputArray = [];
    for(var index in values) { 
        if (values.hasOwnProperty(index)) {
            if(processInput(values[index])){
                outputArray.push('YES');
            }else{
                outputArray.push('NO');
            }
        }  
    }
    return outputArray;
}

function processInput(string) {
    var stack = [], brace='';
    for (var i = 0; i<string.length; i++){
        var char = string.charAt(i);
        if(isOpeningBrace(char)) {
            stack.push(char);
        }else if(isClosingngBrace(char)) {
            var popChar = stack.pop();
            if(typeof popChar == 'undefined') {
                return false;
            }
            if(!isMatchingBrace(popChar, char)) {
                return false;
            }
        }
    }
    if(stack.length==0) {
        return true;
    }else{
        return false;
    }
}

function isMatchingBrace(char1, char2) {
    if( ((char1 == '{') && (char2 == '}')) ||
        ((char1 == '[') && (char2 == ']')) ||
        ((char1 == '(') && (char2 == ')'))
      ) {
       return true;
    }
    return false;
}

function isOpeningBrace(char) {
	return ( (char == '{') || (char == '[') || (char == '(') ) ? true : false;
}

function isClosingngBrace(char) {
	return ( (char == '}') || (char == ']') || (char == ')') ) ? true : false;
}