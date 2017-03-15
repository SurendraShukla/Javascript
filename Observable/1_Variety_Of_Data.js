// Can deal with totally different types of operations
//  If the data can be thought of as evented, stream or async, we can wrap it in an Observable.

Rx.Observable.range(1, 10)
    .subscribe(e => console.log(e));

const sub = Rx.Observable.interval(1000)
        .subscribe(e => doThisEverySecond());
setTimeout(()=> sub.dispose(), 3000);

