 `this` variable depends (resolves) **based on** `invocation/execution context `(and not where it is defined).<br/>
 `this` refers to object which has called the method.
 
  
6 ways of invoking a function/method
1. `Regular function (without Object qualifier)` 
   * In `browser`, default object would `window` if _strict mode is off_ and `undefined` if _strict mode is on_.  
   * In `node`, default object would be `global` object.<br /> 
   e.g. 
   ```javascript 
   fun(); // Its equivalent to window.fun()
   ```
2. `Constructor function` with new keyword e.g.
    ```javascript
    var obj = new fun();
    ```
3. `Object method` **Association of the function stays even after invocation**
    ```javascript
    var val = 1;
   var myObj = {
   	val : 2,
   	someFunction : function() {
   		console.log(this.val);
   	}
    };
    myObj.someFunction();
    ```
5. `IIFE` (Immediately Invoked Function Expression) / `Self Invoking function` value of this is always equal to `window` object. e.g.
    ```javascript 
    (function fun(){ /* body */ }()); 
    ```
    IIFE is self invoked, it has not been called by any object. Hence, the value of this inside IIFE is Window object.
3. Use `call()` function with invocation target and params values `comma separated`. <br />
    e.g. `fn.call(object, varargs….)` **No long term association**  
    ```javascript 
    sum.call(emp, 1, 2);
    ```
4. Use `apply()` function with invocation target and param values in an `array`. <br />
    e.g. `fn.apply(object, array of values)` **No long term association** <br />
    ```javascript 
    sum.apply(emp, [1,2]);
    ```
<br/>

#### Whenever function/method is invoked
**Variables are passed**
1. this - Invocation context, who calls this 
2. arguments
3. length
4. name
5. caller

**Functions are provided by javascript**
1. apply
2. call
3. bind
4. toString
5. Symbol

     
https://hackernoon.com/this-in-javascript-8e8d4cd3930