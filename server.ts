import express from 'express';
import cors from 'cors';
import http from 'http';
import { Server, Socket } from 'socket.io';
import handlerColor from './handlers/handlerColor';

const port = 3000;
const app = express();
const server = http.createServer(app);
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
const colorBlink = (socket: Socket) => {
  socket.emit('message', 'get color');
  socket.once('message', (message) => {
    socket.emit('message', handlerColor(message));
  });
};

io.on('connection', (socket: Socket) => {
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
