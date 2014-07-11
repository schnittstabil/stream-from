# stream-from [![Dependencies Status Image](https://gemnasium.com/schnittstabil/stream-from.svg)](https://gemnasium.com/schnittstabil/stream-from) [![Build Status Image](https://travis-ci.org/schnittstabil/stream-from.svg)](https://travis-ci.org/schnittstabil/stream-from)

Create streams from promises, iterators, factories and arbitrary Javascript values like functions, arrays, etc.

```bash
npm install stream-from --save
```

This is a simple facade for:

* [stream-from-array](https://github.com/schnittstabil/stream-from-array)
* [stream-from-factory](https://github.com/schnittstabil/stream-from-factory)
* [stream-from-iterator](https://github.com/schnittstabil/stream-from-iterator)
* [stream-from-promise](https://github.com/schnittstabil/stream-from-promise)
* [stream-from-value](https://github.com/schnittstabil/stream-from-value)

```JavaScript
var streamFrom = require('stream-from');

/* stream-from-array */
streamFrom.array(['foo', 'bar']).pipe(process.stdout); // output: foobar
streamFrom.array.obj(...).pipe(...);

/* stream-from-factory */
streamFrom.factory(...).pipe(...);
streamFrom.factory.obj(...).pipe(...);

/* stream-from-iterator */
streamFrom.iterator(...).pipe(...);
streamFrom.iterator.obj(...).pipe(...);

/* stream-from-promise */
streamFrom.promise(...).pipe(...);
streamFrom.promise.obj(...).pipe(...);

/* stream-from-value */
streamFrom.value(...).pipe(...);
streamFrom.value.obj(...).pipe(...);
```

## License

Copyright (c) 2014 Michael Mayer

Licensed under the MIT license.
