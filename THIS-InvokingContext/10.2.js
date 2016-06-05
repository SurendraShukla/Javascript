var obj1;
console.log(obj1);

var obj1 = { a: 1, b : 2, "innerFun":function() {console.log('inside innerFun function');}};
this.obj2 = { "a": 10, "b" : 20};
obj3 = {"a": 11, "b" : 22}

console.log("obj1.a=["+obj1.a+"] b=["+obj1.innerFun()+"]");
