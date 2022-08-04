const express = require('express');
const app = express();
const port = 3000;
const http = require('http');
const server = http.createServer(app);
const { Server } = require('socket.io');
const io = new Server(server);

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.use(express.static(__dirname + '/'));

const randomNum = (min = 2000, max = 10000) => {
  const random = Math.random() * (max - min) + min;
  return random.toFixed();
};

const colorBlink = (socket) => {
  socket.emit('message', 'get color');
  socket.once('message', (message) => {
    switch (message) {
      case 'red':
        return socket.emit('message', 'red yellow');
      case 'red yellow':
        return socket.emit('message', 'green');
      case 'green':
        return socket.emit('message', 'yellow');
      case 'yellow':
        return socket.emit('message', 'red');
      case '':
        return socket.emit('message', 'yellow');
      default:
        return socket.on('disconnect', function () {
          return socket.disconnect(true);
        });
    }
  });
};

io.on('connection', (socket) => {
  console.log('connection ok');

  timer = setInterval(() => {
    colorBlink(socket);
  }, randomNum());

  socket.on('disconnect', function () {
    console.log('A user disconnected');
    clearInterval(timer);
  });
});

server.listen(port, () => {
  console.log('listening on *:3000');
});
