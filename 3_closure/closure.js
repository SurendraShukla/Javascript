var myObject = {
    foo: "bar",
    func: function() {
        var self = this;
        console.log("outer func:  this.foo = " + this.foo);
        console.log("outer func:  self.foo = " + self.foo);
        (function() {
            console.log("inner func:  this.foo = " + this.foo);
            console.log("inner func:  self.foo = " + self.foo);
        }());
    }
};
myObject.func();

var global = {i : 0};
for(var i = 0 ; i<5; i++) {
    global.i = i;
    (function(a,b){
        setTimeout(function(){
			console.log(a, b);
			//console.dir(b);
        });    
    })(i,global)
}



function withImmutable(){

  function Global(a){
      var i = a;

    return {
      setI : function(t){
        return new Global(t)
      },

      getI : function(){
        return i;
      }

    }

  }


  var global=  Global(0);

  for(var i = 0 ; i<5; i++){
    (function(a,b){
      setTimeout(function(){
        console.log(a ,b.getI());
      }, 5000);    
    })(i,global)
    
    global = global.setI(i+1)
  }
}
