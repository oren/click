var http = require('http');
var ecstatic = require('ecstatic')(__dirname + '/static');
var shoe = require('shoe');

var server = http.createServer(ecstatic);
server.listen(3001);

var sock = shoe(function (stream) {
  stream.pipe(stream, { end : false });
});

sock.install(server, '/move');
