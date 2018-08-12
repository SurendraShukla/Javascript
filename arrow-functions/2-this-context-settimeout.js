function PersonOld() {
    // The PersonOld() constructor defines `this` as an instance of itself.
    this.age = 0;

    setTimeout(function growUp() {
        // In non-strict mode, the growUp() function defines `this`
        // as the global object (because it's where growUp() is executed.),
        // which is different from the `this`
        // defined by the PersonOld() constructor.
        this.age++;
    }, 1000);
}

var p = new PersonOld();

// node 2-this-context-settimeout.js


function PersonNew(){
    this.age = 0;

    setTimeout(() => {
        this.age++; // |this| properly refers to the PersonNew object
    }, 1000);
}

var p = new PersonNew();
