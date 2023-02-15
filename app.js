const http = require('http');

const server = http.createServer((req, res) => {
    const url = req.url;
    if (url === '/') {
     res.write('<html>');
     res.write('<head><title>Enter Message HTML</title></head>');
     res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>');
     res.write('</html>');
     return res.end();
    }
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>First HTML</title></head>');
    res.write('<body>Hello from the Node.js Server 📟...</body>');
    res.write('</html>');
    res.end();
});

server.listen(3000);



