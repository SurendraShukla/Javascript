/**
 *  For this exercise you should implement a JSON "stringify" function
 *  That will turn this simple object into a valid JSON string.
 *  The result is tested against the output of the built-in JSON.stringify
 **/

var obj = {
    foo: 'bar',
    id: 1
};

function stringify(obj) {
    // implement this

    //The object has 2 prop
    //"{"foo": "bar", "id":1}"
    var result = '';

    var size = Object.keys(obj).length;
    var count = 0;
    for(var i in obj) {
        // obj[i] // obj["foo"]
        result += '\"' + i + '\"';
        result += ':';
        if(typeof obj[i] === 'number') {
            result += obj[i];
        } else {
            result += '\"' + obj[i] + '\"';
        }
        count++;
        if(count < size) {
            result += ','
        }

    }
    return '{' + result + '}';
}

// should log true
console.log(JSON.stringify(obj) === stringify(obj));
