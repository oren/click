var shoe = require('shoe');
var through = require('through');

var stream = shoe('/move');

// i don't see anything here
stream.pipe(through(function (msg) {
  console.log('move slide', msg);
}));

console.log('init');
