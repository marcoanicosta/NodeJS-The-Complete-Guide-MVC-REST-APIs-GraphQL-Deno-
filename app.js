const http = require('http');

const routes = ('./routes');


const server = http.createServer(routes);

server.listen(3000);



