let params = new URLSearchParams(location.search);
let choice = params.get('choice');
h1(choice)

function h1(text) {
  var h1 = document.createElement('h1');
  h1.appendChild(document.createTextNode(text));
  document.body.appendChild(h1);
}

// $(document).ready(function() {
//     $("h1").click(function() {
//        alert("Hello, world!");
//     });
//  });

// const choiceBtns = document.getElementsByName('choice')
// choiceBtns.forEach(choice => choice.addEventListener('click', e => {
//   document.location.href = './choice.html'
//   document.body.innerHTML += `<h1>${e.target.id}<h1>`
// }))

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