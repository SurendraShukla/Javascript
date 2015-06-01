function fx() {
    for (var i = 0; i < 3; i++) {
        setTimeout(function () {
            console.log("i = " + i);
        }, 1000);
    }
}
var obj = {key: 0}
function gx() {
    for (var i = 0; i < 3; i++) {
        obj.key = i;
        setTimeout(function outer(i, j) {
            return function inner() {
                console.log("i = " + i);
                console.log("obj.key = " + j.key);
            }
        }(i, obj), 2000);
        //here obj is a reference to the object {key :….}
    }
}
fx();
gx();



function fx() {
    for (var i = 0; i < 3; i++) {
        setTimeout(function () {
            console.log("i = " + i);
        }, 1000);
    }
}

var obj = {key: 0}

function gx() {
    for (var i = 0; i < 3; i++) {
        obj.key = i;
        setTimeout(function outer(i, j) {
            return function inner() {
                console.log("i = " + i);
                console.log("obj.key = " + j);
            }
        }(i, obj.key), 2000);
        //here obj.key is a value same as I is a value
    }
}
fx();
gx();
