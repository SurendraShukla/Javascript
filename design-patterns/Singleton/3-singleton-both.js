var myInstance = {
    method1: function () {
        // ...
    },
    method2: function () {
        // ...
    }
};

var myInstance = (function() {
    var privateVar = '';

    function privateMethod () {
        // ...
    }

    return { // public interface
        publicMethod1: function () {
            // all private members are accesible here
        },
        publicMethod2: function () {
        }
    };

})();

// http://stackoverflow.com/questions/1479319/simplest-cleanest-way-to-implement-singleton-in-javascript