let traffic = document.querySelector('#trafficlight');

let socket = io();

socket.on('connect', () => {
  socket.on('message', (data) => {
    if (data === 'get color') {
      socket.emit('message', traffic.className);
    } else {
      traffic.className = data;
    }
  });
});
