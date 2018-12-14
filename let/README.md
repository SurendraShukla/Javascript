### LET
The let statement declares a `block scope` local variable.

#### Closure creation using let 
In `ES5`, variables are `hoisted` by default to the environment or scope where they are created.
As a result, `block-level scoping is not possible without` creating a new `closure`.
In `ES6`, `let` was introduced as a way `to scope a variable to a block`, avoiding the need to create a new scope to persist the value of a variable.

#### Things to remember
* `Redeclaring` the same variable within the same function or block scope `raises` a `SyntaxError`.
* `Temporal dead zone` - In hoisting, `let variables are not initialized` until their definition is evaluated. 
  * **Accessing the variable before the initialization** results in a ReferenceError.
  * The variable is in a `temporal dead zone` from the _start of the block_ until the _initialization_ is processed.
* 
* ES6 `let` is used `instead of IIFE pattern(function)`
* ES6 `modules` are used `instead of Revealing module pattern`


#### Links 
* https://hashnode.com/post/do-es6-modules-make-the-case-of-iifes-obsolete-civ96wet80scqgc538un20es0
* https://carlosrymer.com/avoiding-new-closures-with-let-in-es6-9bc6e2f38ca1