"use strict";
var MyClass = (function () {
    function MyClass() {
        throw new Error("Cannot new this class");
    }
    MyClass.doSomething = function () {
        return "World";
    };
    MyClass.myProp = "Hello";
    return MyClass;
}());
exports.MyClass = MyClass;
MyClass.doSomething();
