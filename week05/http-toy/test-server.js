const http = require('http')
const fs = require('fs')
const path = require('path')
let index = 0
// const file = fs.readFileSync(path.join(__dirname, '../../warming-up/call2order.jpg'))
const file = fs.readFileSync(path.join(__dirname, '../../warming-up/NOTE.md'))
// const ff = `名`
// console.log(ff.length)
// console.log(JSON.stringify(file.toString()))
const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/html')
  res.setHeader('X-Foo', 'bar')
  res.writeHead(200, {'Content-Type': 'text/plain'})
  console.log('has request coming' + index)
  index++
  console.log(req.headers)
  console.log(req.path)
  // console.log(req.body)
  // res.end('<html><body>Hello World is OK</body></html>')
  // res.end(ff)
  res.end(file.toString())
  // res.end('ok')
  // res.end('')
})
server.listen(8088)
console.log('server is listen 8088')