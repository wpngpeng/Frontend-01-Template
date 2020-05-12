const http = require('http')

// Returns content-type = text/plain
const server = http.createServer((req, res) => {
  console.log('request')
  console.log(req.header("X-Foo2"));
  res.setHeader('Content-Type', 'text/html');
  res.setHeader('X-Foo', 'bar');
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('ok');
});

server.listen(8080);
