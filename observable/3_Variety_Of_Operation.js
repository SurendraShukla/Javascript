

/* Print 1 to 10 instantly then print a number every 2 seconds */
Rx.Observable.range(1, 10)
    .concat( Rx.Observable.interval(2000) )
    .subscribe(e => console.log(e));

/* Retry the Observable up to 2 times in case of error */
myHttpRequestObservable
    .retry(3) // 2 retries + 1 initial run
    .subscribe(e => console.log(e));

/* Print message if mouse moved within an area */
Rx.Observable.fromEvent(document, 'mousemove')
    .map(e => [e.clientX, e.clientY])
.filter(e => isInArea(e)) // isInArea return boolean
.subscribe(e => console.log('Mouse moved!'));
