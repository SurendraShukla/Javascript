function cb(){
    console.log('Processed in next iteration');
}
setTimeout(() => {console.log('inside setTimeout')},0);
setImmediate(() => {console.log('inside setImmediate')});
process.nextTick(cb);
console.log('Processed in the first iteration');

