
function Global(a) {
    var i = a;

    return {
        setI: function (t) {
            return new Global(t)
        },

        getI: function () {
            return i;
        }

    }

}


var global = Global(0);

for (var i = 0; i < 5; i++) {
    (function (a, b) {
        setTimeout(function () {
            console.log(a, b.getI());
        }, 5000);
    })(i, global);
    global = global.setI(i + 1);;
}

