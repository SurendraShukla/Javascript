In ES5, variables are hoisted by default to the environment or scope where they are created.
As a result, block-level scoping is not possible without creating a new closure.


In ES6, let was introduced as a way to scope a variable to a block, avoiding the need to create a new scope to persist the value of a variable.

let in the loop can re-binds it to each iteration of the loop, making sure to re-assign it the value from the end of the previous loop iteration, so it can be used to avoid issue with closures.

ES6 let is used instead of IIFE pattern(function)
ES6 modules are used instead of Revealing module pattern
 https://hashnode.com/post/do-es6-modules-make-the-case-of-iifes-obsolete-civ96wet80scqgc538un20es0
 

https://carlosrymer.com/avoiding-new-closures-with-let-in-es6-9bc6e2f38ca1