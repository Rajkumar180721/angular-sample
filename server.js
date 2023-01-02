

const jsonServer = require('json-server')
const cors = require('cors');
const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()

server.use(middlewares)
server.use(router)
server.use(jsonServer.bodyParser);
server.use(cors({
    origin: "*"
}));
const PORT = 5000;
server.listen(PORT, () => {
  console.log('JSON Server is running on PORT', PORT)
})