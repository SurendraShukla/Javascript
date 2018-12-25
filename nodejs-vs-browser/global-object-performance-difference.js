/*
Within a web browser such as Chrome,
declaring the variable i outside of any function’s scope makes it global and therefore binds it as a property of the window object.
As a result,
running this code in a web browser requires repeatedly resolving the property i within the heavily populated window namespace in each iteration of the for loop.

In Node.js, however, declaring any variable outside of any function’s scope binds it only to the module’s own scope (not the window object)
which therefore makes it much easier and faster to resolve.
 */
{
    console.time("loop");
    for (var i = 0; i < 1000000; i += 1){
        // Do nothing
    }
    console.timeEnd("loop");
}

