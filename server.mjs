import http from 'http';
import handler from './handler.mjs';
const server = new http.Server();

// node --experimental-modules server.mjs

server.on('request', handler);

const emit = server.emit;
server.emit = (...args) => {
  console.log(args[0]);
  return emit.apply(server, args);
};

server.listen(8000);