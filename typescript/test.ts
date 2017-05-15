export class MyClass {
    constructor() {
        throw new Error("Cannot new this class");
    }

    static myProp = "Hello";

    static doSomething() {
        return "World";
    }
}

MyClass.doSomething();