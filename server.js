const http = require('http');
const server = new http.Server();
const handler = require('./handler');

server.on('request', handler);

const emit = server.emit;
server.emit = (...args) => {
  console.log(args[0]);
  return emit.apply(server, args);
};

server.listen(8000);