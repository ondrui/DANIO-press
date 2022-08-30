"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const http_1 = __importDefault(require("http"));
const socket_io_1 = require("socket.io");
const handlerColor_1 = __importDefault(require("./handlers/handlerColor"));
const port = 3000;
const app = (0, express_1.default)();
const server = http_1.default.createServer(app);
const io = new socket_io_1.Server(server, {
    cors: {
        origin: '*',
    },
});
app.use((0, cors_1.default)());
const randomNum = (min = 2000, max = 10000) => {
    const random = Math.random() * (max - min) + min;
    return +random.toFixed();
};
/**
 * This function connect to client
 * @param {Object} socket
 * @param {Number} message
 */
const colorBlink = (socket) => {
    socket.emit('message', 'get color');
    socket.once('message', (message) => {
        socket.emit('message', (0, handlerColor_1.default)(message));
    });
};
io.on('connection', (socket) => {
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
