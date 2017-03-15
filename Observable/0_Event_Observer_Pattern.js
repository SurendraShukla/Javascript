
/* This is how we've been doing observer pattern */
document.addEventListener('mousemove', e => console.log(e.clientX));

/* This is how the new Observable looks like doing same thing */
Rx.Observable.fromEvent(document, 'mousemove')
    .subscribe(e => console.log(e.clientX));
