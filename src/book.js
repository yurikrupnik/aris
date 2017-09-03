// const EventEmitter = require('events').EventEmitter;
// const util = require('util');
// const Counter = function (init) {
//   this.increment = function () {
//     init++;
//     this.emit('incremented', init);
//   };
// };
//
// util.inherits(Counter, EventEmitter);
//
// const counter = new Counter(10);
//
// function callback(count) {
//   console.log('calling registered callback', count);
// }
//
// counter.on('incremented', callback);
// counter.increment();
// counter.increment();
import { EventEmitter } from 'events';

function callback(count) {
  console.log('calling registered callback', count);
}

class Counter extends EventEmitter {

  // increment() {
  //   this.value++;
  //   this.emit('incremented', this.value);
  // }

  constructor(init) {
    super();
    this.on('incremented', callback)
      .on('decremented', callback);
    this.increment = function () {
      init++;
      this.emit('incremented', init);
    };

    this.decrement = function () {
      init--;
      this.emit('decremented', init);
    };
  }
}

const counter = new Counter(3);

// counter
//   .on('incremented', callback)
//   .on('decremented', callback);
counter.increment();
counter.increment();
counter.decrement();
counter.increment();

