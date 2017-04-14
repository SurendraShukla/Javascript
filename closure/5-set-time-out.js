// 1. Anonymous function
for (var i = 0; i < 3; i++) {
    (function(i){
        setTimeout(function () {
            console.log(i);
        }, 1000);
    })(i);
}

// 2. With function name
for (var i = 10; i < 13; i++) {
    function fx(i) {
        setTimeout(function () {
            console.log(i);
        }, 1000, i);
    }
    fx(i);
}
