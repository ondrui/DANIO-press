let traffic = document.querySelector('#trafficlight');

let colorsTraffic = {
  red: 'red',
  green: 'green',
  yellow: 'yellow',
  redYellow: 'red yellow',
};

let socket = io();

socket.on('connect', () => {
  socket.on('message', (data) => {
    console.log(data);
    if ((data === 'get color')) {
      console.log(traffic.className);
      socket.emit('message', traffic.className);
    } else {
      console.log(traffic.className);
      console.log(data);
      traffic.className = data;
      console.log(traffic.className);
    }
  });
});
