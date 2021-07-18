const http = require('http');

// console.log(http);

const server = http.createServer((request, response) => {
  let url = request.url;
  response.write(url);
  response.end();
});


server.listen(8090, 'localhost', () => {
  console.log('localhost:8090');
});