
for(var i=1; i<=10; i++) {}
console.log("i=["+i+"]");


if(true) {
	var j=20;
}
console.log("j=["+j+"]");


if(false) {
    var k=30;
}
console.log(k);


function fun() {
	console.log("i=["+i+"]");
	var l=40;
}
fun();
console.log("k=["+l+"]");

console.log(m);

// IE7; LET for block level scope
// let l=40;
