const http = require('http');
const server = new http.Server();

let i = 0;
server.on('request', (req, res) => {
    i++;
    res.end(`Hello world ${i}!`)
});

server.listen(8000);