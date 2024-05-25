const log = console.log;
const http = require("http").createServer();
const io = require("socket.io")(http, {
  cors: { origin: "*" },
});
const port = 3000;
const GateInfo = {};

http.listen(port, () => log(`server listening on port: ${port}`));
io.on("connection", (socket) => {
  log("connected");
  socket.on("new gate listener", (arg, callback) => {
    callback(GateInfo[arg]);
  });
  socket.on("message", (e) => {
    GateInfo[e.gateNumber] = e;
    socket.broadcast.emit("message", e);
  });
});
io.on("disconect", (e) => log("conexion cerrada"));
