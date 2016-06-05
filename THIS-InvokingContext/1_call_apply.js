function greet(salutation, msg) {
	console.log(salutation + " "+ this.firstName + "," + msg);
}

var emp = {firstName : "Surendra"};

// Expected value 
// Hi Surendra, Have a nice day!


// 1st way 
emp.greet = greet;

// 2nd way
greet.call(emp, "Hi ", "Have a nice day!");
greet.apply(emp, ["Hi ", "Have a nice day!"]);
// "A for array and C for comma."


// 3rd way
firstName = "Test";
greet.call(window, "Hi ", "Have a nice day!");



