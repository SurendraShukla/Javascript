new Promise(resolve => {
    return setTimeout(function() {
        console.log('resolving promise');
    }, 1000);
});


myPromise = new Promise(resolve => setTimeout(resolve, 1000) );
myPromise.then(() => {console.log('resolving promise');});
