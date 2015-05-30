foo();
//bar();
//baz();
//spam();

var foo = function () { console.log("inside foo!"); }; 
function bar() { console.log("inside bar!"); }; 
var baz = function spam() { console.log("inside baz!"); }; 

foo();
bar();
baz();
spam();
