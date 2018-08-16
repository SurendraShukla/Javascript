var greet = function(greeting, name) {
    console.log(greeting + ", " + name);
};

greet("Hello", "Surendra"); //"Hello, Surendra"



var greetCurried = function(greeting) {
    return function(name) {
        console.log(greeting + ", " + name);
    };
};

var greetHello = greetCurried("Hello");
greetHello("Surendra"); //"Hello, Surendra"
greetHello("Suren"); //"Hello, Suren"

greetCurried("Hi there")("Suren"); //"Hi there, Suren"

