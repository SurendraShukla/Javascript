
export class Employee{
// class Employee{
    private name: string = 'Surendra';
    protected salary: number = 10000;
    title: string = 'Mr.';

    constructor(private id) {
    }

    printValues(): void {
        console.log(this.id + '::' + this.title + '::' + this.name + '::' + this.salary);
    }
}


let obj = new Employee(10);
console.log(obj.title);
obj.printValues();
