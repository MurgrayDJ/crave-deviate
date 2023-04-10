// $(document).ready(function() {
//     $("h1").click(function() {
//        alert("Hello, world!");
//     });
//  });

const choiceBtns = document.getElementsByName('choice')
choiceBtns.forEach(choice => choice.addEventListener('click', e => {
  alert('Hi!')
}))

// const http = require('https');

// const hostname = '127.0.0.1';
// const port = 3000;

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('Hello World');
// });

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });