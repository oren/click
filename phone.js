var shoe = require('shoe');
var through = require('through');

var next = document.getElementById('next');
var prev = document.getElementById('prev');
var stream = shoe('/move');

next.addEventListener('click', emitNext);
prev.addEventListener('click', emitPrevious);

function emitNext() {
  stream.write('next');
}

function emitPrevious() {
  stream.write('previous');
}

// this works 
stream.pipe(through(function (msg) {
  console.log('move slide', msg);
}));
