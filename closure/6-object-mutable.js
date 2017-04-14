
var globalObj = {key: 0}
function gx() {
    for (var i = 0; i < 3; i++) {
        globalObj.key = i;
        setTimeout(function outer(i, j) {
            return function inner() {
                console.log("i = " + i);
                console.log("globalObj.key = " + j.key);
            }
        }(i, globalObj), 2000);
        // Here globalObj is a reference to the globalObject {key :….}
    }
}
gx();


var globalObj = {key: 0}
function gx() {
    for (var i = 0; i < 3; i++) {
        globalObj.key = i;
        setTimeout(function outer(i, j) {
            return function inner() {
                console.log("i = " + i);
                console.log("globalObj.key = " + j);
            }
        }(i, globalObj.key), 2000);
        // Here globalObj.key is a value same as I is a value
    }
}
gx();
