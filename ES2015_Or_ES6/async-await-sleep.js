
function sleep(milliseconds) {
    var start = new Date().getTime();
    for (var i = 0; i < 1e7; i++) {
        if ((new Date().getTime() - start) > milliseconds){
            break;
        }
    }
}


function resolveAfter2Seconds(x) {
    sleep(1000);
    return x;
}

async function add1(x) {
    var a = resolveAfter2Seconds(20);
    var b = resolveAfter2Seconds(30);
    return x + await a + await b;
}

add1(10).then(v => {
    console.log(v);  // prints 60 after 2 seconds.
});
