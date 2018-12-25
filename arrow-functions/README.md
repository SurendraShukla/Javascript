* ES6 arrow function syntax uses **lexical scoping** 
  * **Lexical/Static Scoping** means by looking at source code we can identify the value of `this` (code that contains the Arrow Function).
  * An arrow function _does not have its own `this`_; the `this` value of the **enclosing execution context is used**. 
* ES6 arrow function syntax will **always override** any previously bound or dynamically determined value of “this”.

> **Two factors** influenced the introduction of arrow functions: 
> 1. Shorter functions and 
> 2. No existence of `this` keyword.

#### Think it as METHOD in oops language.


* An arrow function expression has a `shorter syntax` than a function expression and **does not have** its own `this`, `arguments`, `super`, or `new.target`.
  * Best suited for non-method functions.
  * `this` refers to method where it is defined.
  * Cannot be used as `constructors` and will throw an error when used with new.
  * Do not have a `prototype` property.
  * Do not have their own `arguments object`.
  * **yield** keyword may not be used in an arrow function's body (except when permitted within functions further nested within it). As a consequence, arrow functions cannot be used as generators.
 