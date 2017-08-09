"use strict";
var Employee = (function () {
    function Employee(id) {
        this.id = id;
        // class Employee{
        this.name = 'Surendra';
        this.salary = 10000;
        this.title = 'Mr.';
    }
    Employee.prototype.printValues = function () {
        console.log(this.id + '::' + this.title + '::' + this.name + '::' + this.salary);
    };
    return Employee;
}());
exports.Employee = Employee;
var obj = new Employee(10);
console.log(obj.title);
obj.printValues();
