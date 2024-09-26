const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('public/api/dogs.json');
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(jsonServer.bodyParser);

server.use((req, res, next) => {
  if (req.method === 'POST') {
    req.body = { data: req.body };
  }
  next();
});

server.use('/api', router);

server.listen(3000, () => {
  console.log('JSON Server is running on port 3000');
});