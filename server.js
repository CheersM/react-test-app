const express = require('express');
const bodyParser = require('body-parser');
const path = require('json-server');
const app = express();
app.use(express.static(path.join(__dirname, 'build')));

app.get('/ping', function (req, res) {
  return res.send('pong');
});

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(process.env.PORT || 3001);

// const jsonServer = require('json-server');
// const server = jsonServer.create();
// const router = jsonServer.router('./public/db.json');
// const middlewares = jsonServer.defaults({
//   static: './build',
// });

// const PORT = process.env.PORT || 3001;

// server.use(middlewares);
// server.use(router);

// server.listen(PORT, () => {
//   console.log('Server is running');
// });
