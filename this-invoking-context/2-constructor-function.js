var myFunction = function(){
    console.log(this);
    console.log(this=== window);
}

myFunction();
