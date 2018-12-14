(function() {

    console.log(typeof foo); // function pointer
    console.log(typeof bar); // undefined

    var foo = 'hello',
        bar = function() {
            return 'world';
        };

    function foo() {
        return 'hello';
    }

}());​


/**
Foo is declared twice, why is foo shown to be function and not undefined or string?
    Even though foo is declared twice, we know from the creation stage that functions are created on the activation object before variables, and if the property name already exists on the activation object, we simply bypass the decleration.
    Therefore, a reference to function foo() is first created on the activation object, and when the interpreter gets to var foo, we already see the property name foo exists so the code does nothing and proceeds.

Why is bar undefined?
    bar is actually a variable that has a function assignment, and we know the variables are created in the creation stage but they are initialized with the value of undefined.
*/
