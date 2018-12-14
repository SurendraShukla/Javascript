### Execution context, Scope chain and JavaScript internals
`Execution context (EC)` is defined as the `environment/scope in which JavaScript code is executed`. <br />By environment means the value of _this_, _variables_, _objects_, and _functions_ JavaScript code has access to, constitutes it’s environment. <br/>
In JS `Environment`is a data structure that provides that storage space to variables.


* ##### Execution context types
  1. `Global execution context (GEC)` The default environment in which code is executed for the first time.
  2. `Functional execution context (FEC)` Whenever the flow of execution enters a function body. 
  3. `Eval`: Execution context inside _eval function_.

#### Execution Context Stack
  The _JavaScript interpreter_ in a browser is implemented as `a single thread`. <br />
  What this actually means is that only 1 thing can ever happen at one time in the browser, with other `actions or events being queued in` what is called the `Execution Stack`.

* ##### There are 5 key points to remember about the execution stack
  1. Single threaded.
  2. Synchronous execution.
  3. 1 Global context.
  4. Infinite function contexts.
  5. Each function call creates a new execution context, even a call to itself.

#### Execution context has 2 stages
  1. `Creation phase` when the function is called, but before it executes any code inside. <br/> 
  JS engine is in the _compilation phase_ and it scans over the function to compile the code.
     * Create the `Scope Chain`.
     * Create `variables`, `functions` and `arguments`.
     * Determine the value of `this`.
     
  2. `Activation / Code Execution phase`
     * Assign values, references to functions and interpret / execute code.


##### Links
* http://davidshariff.com/blog/what-is-the-execution-context-in-javascript/
* https://hackernoon.com/execution-context-in-javascript-319dd72e8e2c
* http://speakingjs.com/es5/ch16.html - Environments: Managing Variables

    


    