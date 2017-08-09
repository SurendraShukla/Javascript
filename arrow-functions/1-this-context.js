this.a=20;
setTimeout(function () {
    console.log( "Normal:\t" + this.a);
}, 0);

setTimeout( () => console.log( "Arrow:\t" + this.a), 0);

// node 1-this-context.js
