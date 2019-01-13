function cb(){
    console.log('Processed in next iteration');
}
setImmediate(() => {console.log('inside setImmediate')});
setTimeout(() => {console.log('inside setTimeout 4')},4);
// setTimeout(() => {console.log('inside setTimeout 5')},5);
process.nextTick(cb);
console.log('Processed in the first iteration');

