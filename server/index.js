const log = console.log;
const http = require("http").createServer();
const io = require("socket.io")(http, {
  cors: { origin: "*" },
});
const port = 3000;
const lastGateData = [
  {
    gateNumber: "1",
    flightNumber: "no data yet",
    destination: "no data yet",
    airLine: "no data yet",
    departureTime: "no data yet",
  },
  {
    gateNumber: "2",
    flightNumber: "no data yet",
    destination: "no data yet",
    airLine: "no data yet",
    departureTime: "no data yet",
  },
  {
    gateNumber: "3",
    flightNumber: "no data yet",
    destination: "no data yet",
    airLine: "no data yet",
    departureTime: "no data yet",
  }

];

http.listen(port, () => log(`server listening on port: ${port}`));
io.on("connection", (socket) => {
  log("connected");

  socket.on("new client", (arg, callback) => {
    console.log(arg); // "world"
    callback(lastGateData[arg - 1]);
  });

  socket.on("message", (e) => {
    log(e);
    lastGateData[e.gateNumber -1 ] =e
    socket.broadcast.emit("message", e);
  });
});

io.on("disconect", (e) => log("conexion cerrada"));
