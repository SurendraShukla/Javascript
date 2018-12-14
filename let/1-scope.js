{
    var a = 10;
    let b = 20;
}

console.log(a); // 10
console.log(b); // ReferenceError

var x = 'global';
let y = 'global';

console.log(this.x); // "global"
console.log(this.y); // undefined

