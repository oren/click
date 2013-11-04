var shoe = require('shoe');
var through = require('through');

var stream = shoe('/move');

stream.pipe(through(function (msg) {
  console.log('move slide', msg);
}));
