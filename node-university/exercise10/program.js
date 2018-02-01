const net = require('net');

const port = process.argv[2];

function formattedTime() {
  const now = new Date();

  return now.getFullYear()
    + `-${zeroPad(now.getMonth() + 1)}`
    + `-${zeroPad(now.getDate())}`
    + ` ${zeroPad(now.getHours())}`
    + `:${zeroPad(now.getMinutes())}`;
}

function zeroPad(num) {
  return (num < 10) ? `0${num}` : num;
}

const tcpServer = net.createServer(socket => {
  socket.end(`${formattedTime()}\n`);
});

tcpServer.listen(port);
