const http = require('http');

const PORT = process.env.PORT || 5000;

const server = http.createServer((req, res) => {
   res.writeHead(200, {
      'Content-Type': 'aplication/json; charset=utf-8'
   })
   if (req.url === '/users'){
      res.end('UsersPage');
   } else {
      res.end('Сервер работает! sfasdf');
   }
});

server.listen(PORT, () => console.log(`Server started on PORT: ${PORT}`));