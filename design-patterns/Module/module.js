var MyModule = ( function( window, undefined ) {

    // this object is used to store private variables and methods across multiple instantiations
    var privates = {};

    function MyModule() {

        this.myMethod = function myMethod() {
            alert( 'my method' );
        };

        this.myOtherMethod = function myOtherMethod() {
            alert( 'my other method' );
        };

    }

    return MyModule;

} )( window );

// example usage
var myMod = new MyModule();
myMod.myMethod(); // alerts "my method"
myMod.myOtherMethod(); // alerts "my other method"