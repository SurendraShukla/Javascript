var clickMsg = "Window Clicked";

window.onclick = (function(msg) {
    return function () { console.log(msg); };
})(clickMsg);


