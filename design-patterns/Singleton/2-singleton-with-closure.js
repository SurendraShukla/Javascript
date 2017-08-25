var Sun = (function(){
    var sunInstance; //private variable to hold the
                     //only instance of Sun that will exits.

    var createSun = function(){
        var privateMass = 10000000000; //private
        var looseMass = function(mass){
            privateMass -= mass;
        }
        var publicEmitLight = function(){
            //some complex Nuclear fission
            //calling looseMass()
            looseMass(10);
        };
        var getMass = function(){
            return privateMass;
        };
        return {
            emitLight: publicEmitLight,
            getMass: getMass
        };
    };

    return {
        getInstance: function(){
            if(!sunInstance){
                sunInstance = createSun();
            }
            return sunInstance;
        }
    };
})();


var mySun1 = Sun.getInstance();
var mySun2 = Sun.getInstance();
console.log(mySun1 == mySun2);


// http://viralpatel.net/blogs/javascript-singleton-design-pattern/