"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var _3_employee_1 = require("./3-employee");
var CDK = (function (_super) {
    __extends(CDK, _super);
    function CDK() {
        _super.call(this, 10);
    }
    Object.defineProperty(CDK.prototype, "location", {
        get: function () {
            console.log('inside get location');
            return this._location;
        },
        set: function (value) {
            console.log('inside set location');
            this._location = value;
        },
        enumerable: true,
        configurable: true
    });
    CDK.prototype.printLocation = function () {
        // this.title
        // this.salary = 10;
        console.log('Before setting location ' + this.location);
        this.location = 'Pune';
        console.log('After setting location ' + this.location);
    };
    CDK.prototype.arrowFun = function () {
        return function () { };
    };
    return CDK;
}(_3_employee_1.Employee));
var obj = new CDK();
// obj.sala
obj.printLocation();
