1. `for...of` statement iterates over data that the **iterable object** defines to be iterated over.  
   * Includes **built-in** String, Array, Array-like objects (e.g., arguments or NodeList), TypedArray, Map, Set, and **user-defined iterables**

   ###### Iterables
   * `String`, `Array`, `TypedArray`, `Map` and `Set` are **iterables** (Iterable objects), because each of their prototype objects **implements an @@iterator method**.
      * Object (or one of the objects up its prototype chain) has a property with a @@iterator key which is **available via constant Symbol.iterator**
   * Works in terms of `.iterator()` and `.next()` and `use @iterator property`
   * 
2. `for...in` statement iterates over the **enumerable properties** of an object, in **an arbitrary order**.
   * Built for **iterating object properties**.
   * **Should not be used to iterate** over an Array where the **index order is important**.
   *
3. `for await...of` statement creates a loop iterating over **async iterable objects** as well as on **sync iterables**
   * Includs: **built-in** String, Array, Array-like objects (e.g., arguments or NodeList), TypedArray, Map, Set, and **user-defined async/sync iterables**
4. `let / const` 
   * **let** & **const** are `hoisted` but `not initialised`.
     * The lexically declared variables however stay uninitialised. 
     * **var** is `hoisted` and `initialised with undefined`.
   * `ReferenceError exception` is thrown when you try to access it.
   *
   * `Temporal Dead Zone` is everything (trying to access variable) before `let/const/class` statement is evaluated/initialised.
   *
5. Arrow function
6. Spread syntax (splat operator)
7. Promise
8.