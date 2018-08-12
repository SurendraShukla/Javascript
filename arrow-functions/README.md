* ES6 arrow function syntax uses **lexical scoping** 
  * **Lexical Scoping** just means that it uses `this` from the code that contains the Arrow Function.
  * An arrow function _does not have its own `this`_; the `this` value of the **enclosing execution context is used**. 
* ES6 arrow function syntax will **always override** any previously bound or dynamically determined value of “this”.
* An arrow function expression has a `shorter syntax` than a function expression and **does not have** its own `this`, `arguments`, `super`, or `new.target`.
  * Best suited for non-method functions.
  * Cannot be used as constructors and will throw an error when used with new.
  * Do not have a prototype property.
  * Do not have their own arguments object. T
  * **yield** keyword may not be used in an arrow function's body (except when permitted within functions further nested within it). As a consequence, arrow functions cannot be used as generators.