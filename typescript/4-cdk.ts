import { Employee } from "./3-employee";

class CDK extends Employee{
// class CDK{
    private _location: string;

    constructor() {
        super(10);
    }

    get location(): string {
        console.log('inside get location');
        return this._location;
    }

    set location(value: string) {
        console.log('inside set location');
        this._location = value;
    }

    printLocation() {
        // this.title
        // this.salary = 10;
        console.log('Before setting location ' + this.location);
        this.location = 'Pune';
        console.log('After setting location ' + this.location);
    }

    arrowFun() {
        return () => {};
    }

}

let obj = new CDK();
// obj.sala
obj.printLocation();
