### Memoization

Functions can use objects to remember the results of previous operations, making it
possible to avoid unnecessary work. This optimization is called memoization. 
JavaScript’s objects and arrays are very convenient for this.

If we call fibonacci function for first 11 numbers, and it calls itself 442 times in computing values
that were probably already recently computed. If we memoize the function, we can
significantly reduce its workload.

We will keep our memoized results in a memo array that we can hide in a closure.
When our function is called, it first looks to see if it already knows the result.

