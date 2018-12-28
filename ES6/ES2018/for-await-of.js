// Asynchronous generator
async function* asyncGen() {
    yield 'a';
    yield 'b';
}

// Asynchronous iterables
const iter = asyncGen()[Symbol.asyncIterator]();

iter.next().then(x => console.log(x));
// { value: 'a', done: false }
iter.next().then(x => console.log(x));
// { value: 'b', done: false }
iter.next().then(x => console.log(x));
// { value: undefined, done: true }

// for...await...of
(async function() {
    for await (const x of asyncGen()) {
        console.log(x);
    }
})();

/*
Iterating over a sync iterable over Promises:
Iterating over a sync iterable over normal values:
 */
async function main() {
    const syncIterable = [
        Promise.resolve('a'),
        Promise.resolve('b'),
    ];
    for await (const x of syncIterable) {
        console.log(x);
    }

    for await (const x of ['c', 'd']) {
        console.log(x);
    }
}
main();

// http://2ality.com/2017/12/for-await-of-sync-iterables.html#refresher-asynchronous-iterables
// http://2ality.com/2016/10/asynchronous-iteration.html