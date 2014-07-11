'use strict';
var streamFrom = require('./'),
    assert = require('assert');

[
  streamFrom.array,
  streamFrom.factory,
  streamFrom.iterator,
  streamFrom.promise,
  streamFrom.value
].forEach(function(sf){
  assert.strictEqual(typeof sf, 'function');
  assert.strictEqual(typeof sf.obj, 'function');
});
