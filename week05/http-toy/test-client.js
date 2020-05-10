const http = require('http');

const options = {
  host: '127.0.0.1',
  port: 8088,
  path: '/length_request'
};

// Make a request
const req = http.request(options);
// req.end();

req.on('data', (res) => {
  console.log(`Got information prior to main response: ${res.toString()}`);
  req.end();
});