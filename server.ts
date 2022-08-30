const express = require('express');
const app = express();
const cors = require('cors');
const port = 3000;
const http = require('http');
const server = http.createServer(app);
const { Server, Socket } = require('socket.io');
const handler = require('./handlers/handlerColor');

const io = new Server(server, {
  cors: {
    origin: '*',
  },
});

app.use(cors());

const randomNum = (min = 2000, max = 10000): number => {
  const random = Math.random() * (max - min) + min;
  return +random.toFixed();
};

/**
 * This function connect to client
 * @param {Object} socket
 * @param {Number} message
 */
const colorBlink = (socket: typeof Socket) => {
  socket.emit('message', 'get color');
  socket.once('message', (message: string | number) => {
    socket.emit('message', handler(message));
  });
};

io.on('connection', (socket: typeof Socket) => {
  console.log('connection ok');

  const timer = setInterval(() => {
    colorBlink(socket);
  }, randomNum());

  socket.on('disconnect', function () {
    console.log('A user disconnected');
    clearInterval(timer);
  });
});

server.listen(port, () => {
  console.log(`listening on *:${port}`);
});
