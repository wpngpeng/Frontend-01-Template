const http = require('http')
const fs = require('fs')
const path = require('path')
http.createServer((request, response) => {
  if (request.url === '/favicon.ico') {
    response.writeHead(200)
    response.end()
    return
  }
  response.writeHead(200)
  fs.createReadStream(path.join(__dirname, './index.html')).pipe(response)
}).listen(8088)
console.log('server at 8088...')