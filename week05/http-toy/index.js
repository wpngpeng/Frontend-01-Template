const HttpRequest = require('./http-request')

const request = new HttpRequest({
  port: '8088',
  host: '127.0.0.1',
  path: '/getGoodList',
  method: 'GET',
  headers: {
    ['X-token2']: 'token098',
    ['Y-token3']: 'token123',
    ['Content-Type']: 'text/json'
  },
  body: {
    name: 'jtr',
    password: '123213'
  }
})
request.send().then(res => {
  console.log(res)
}).catch(err => {
  console.log(err)
})
// const net = require('net')
// const client = net.createConnection({ port: 8088, host: '127.0.0.1' }, () => {
//   console.log('---connected to server!');
//   // const requestLine = '\r\nGET / HTTP/1.1\r\n'
//   // const requestHeader = 'Content-Length: 0\r\n'
//   // const requestBlock = '\r\n'
//   // const requestBody = 'hello http toy!'
//   // client.write(requestLine + requestHeader + requestBlock + requestBody);
//   const p = `
// POST / HTTP/1.1\r
// Content-Type: application/x-www-form-urlencoded\r
// Content-Length: 11\r
// \r
// name=winter`
//   console.log(p)
//   client.write(p)
// });
// client.on('data', (data) => {
//   console.log(data.toString(), 'a+++');
//   client.end();
// });
// client.on('end', () => {
//   console.log('----disconnected from server');
// });
// client.on('error', err => {
//   console.log(err, '-------------')
// })