###### JavaScript has a concurrency model based on an _event loop_.

### JavaScript Glossary
1. `Stack` **function** calls form a stack of frames.
2. `Heap` **objects** are allocated in a heap (Denotes a large mostly unstructured region of memory).
3. `Queue` A JavaScript runtime uses a message queue, which is a **list of messages to be processed**. 
   * **Each message has an associated function** which gets called in order to handle the message.
4. `Event loop` **handling the messages** on the queue, starting with the oldest one. 
   * To do so, the message is removed from the queue and its **corresponding function is called** with the message as an input parameter.

A `web worker` or a `cross-origin iframe` has its **own stack, heap,** and **message queue**.  
`Two distinct runtimes` can only **communicate through** sending messages via the `postMessage method`. This method adds a message to the other runtime if the latter listens to message events.

### JavaScript in the browser has:
* a **javascript runtime** like **V8** (`heap/stack`)
   * `heap` (**memory allocation**) and `stack` (**execution contexts**)
* **Web APIs** that the browser provides, like the `DOM`, `Ajax`, and `setTimeout`
* a **callback queue** for events with callbacks like `onClick`, `onLoad`, `onDone`
* an *event loop**

To know more about internal working. Go through `execution context` of Javascript.

##### Links
* https://developer.mozilla.org/en-US/docs/Web/JavaScript/EventLoop
* https://www.zeolearn.com/magazine/understanding-the-javascript-event-loop
* http://cek.io/blog/2015/12/03/event-loop/
*
* How Browsers Work: Behind the scenes of modern web browsers <br /> https://www.html5rocks.com/en/tutorials/internals/howbrowserswork/
