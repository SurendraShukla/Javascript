var str = 'abcd';

getStringUniquePermutation(0, (str.length-1) );


function getStringUniquePermutation(start, end) {

    if(start == end) {
        console.log(str);
        return;
    }
    for(var counter=start; counter<=end; counter++) {
        swap(start, counter);
        getStringUniquePermutation((start+1), end);
        swap(counter, start);
    }

}

function swap(index1, index2) {
    var tmp = str[index1];
    str = replaceAt(str, index1, str[index2]);
    str = replaceAt(str, index2, tmp);
}

// Replace the 'n'th character of 's' with 't'
function replaceAt(str, no, token) {
    return str.substring(0, no) + token + str.substring(no + 1);
}
