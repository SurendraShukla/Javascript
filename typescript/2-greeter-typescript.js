function greeter(person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}
var user = { firstName: "Surendra", lastName: "Shukla" };
console.log(greeter(user));
