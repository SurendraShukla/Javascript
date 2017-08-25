function Factory() {
    this.createEmployee = function (type) {
        var employee;

        if (type === "fulltime") {
            employee = new FullTime();
        } else if (type === "parttime") {
            employee = new PartTime();
        } else if (type === "temporary") {
            employee = new Temporary();
        } else if (type === "contractor") {
            employee = new Contractor();
        }

        employee.type = type;

        employee.say = function () {
            console.log(this.type + ": rate " + this.hourly + "/hour");
        }

        return employee;
    }
}

var FullTime = function () {
    this.hourly = "$12";
};

var PartTime = function () {
    this.hourly = "$11";
};

var Temporary = function () {
    this.hourly = "$10";
};

var Contractor = function () {
    this.hourly = "$15";
};


var factory = new Factory();

var emp1 = factory.createEmployee("fulltime");
emp1.say();
var emp2 =factory.createEmployee("parttime");
emp2.say();
var emp3 = factory.createEmployee("temporary");
emp3.say();
var emp4 =factory.createEmployee("contractor");
emp4.say();
    