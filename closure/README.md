### Closure

Closure (also _lexical closure_ or _function closure_) is a technique for implementing `lexically scoped` `name binding` in a language with `first-class functions`.
> `Name binding` is about finding out **_what data a variable (identifier) references_**.  
> The **scope** is really important here, as that is the thing that will **_determine how a binding is resolved_**.
> 
> `Lexical (static) scoping` where the name can be used to refer to the entity.  
> A variable's definition is resolved by searching its containing block or function, then if that fails searching the outer containing block, and so on.
>

Operationally, a closure is a record storing a function together with an environment. 
The environment is a mapping associating each free variable of the function 
with the value or reference to which the name was bound when the closure was created. 
> `Free variable`  variables that are used locally, but defined in an enclosing scope

A closure allows the function to **access those captured variables** through the _closure's copies of their values or references_, 
even when the function is invoked outside their scope. 


 It is the object that refers both to function object and the scope object. 
 


A closure is any function which closes over the environment in which it was defined.
A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). 
In other words, a closure gives you access to an outer function’s scope from an inner function. 


Techniques for implementing lexically scoped name binding in languages with first-class functions.



Any exposed method defined within the closure scope is Privileged methods.


`Closure = Function pointer + Stack frame.`


### Frequently used in
* All **JavaScript functions are closures**: it's impossible to have the reference to function object without scope object.
* Callable/**callback functions**. In PHP `array_map`, `array_filter`, `preg_replace_callback`
* Event handlers 
* Data Privacy
* Partial applications, Currying

##### Things to remember
* `let` **implicitly introduces closures (actually scopes)** for the variables declared with it.
* `Objects` are _passed by reference_  and  `primitive data-types` are _passed by value_  
* Closure is often mistakenly used to mean `anonymous function`. 
* Lambda functions are not closures. 

### Let 
* In ES5, variables are hoisted by default to the environment or scope where they are created. As a result, block-level scoping is not possible without creating a new closure.
* In ES6, let was introduced as a way to scope a variable to a block, avoiding the need to create a new scope to persist the value of a variable.
*

##### Reference Links
* http://davidshariff.com/blog/javascript-scope-chain-and-closures/
* https://dmitryfrank.com/articles/js_closures
* https://hackernoon.com/execution-context-in-javascript-319dd72e8e2c
* http://blog.niftysnippets.org/2008/02/closures-are-not-complicated.html
* https://stackoverflow.com/a/36879264 
* https://stackoverflow.com/a/44915262
* 

