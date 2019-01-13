setTimeout(function (){
    console.log("inside setTimeOut callback function");
}, 0);

setTimeout(console.log("inside setTimeOut callback statment"), 0);
