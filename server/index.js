const log = console.log;
const http = require("http").createServer();
const io = require("socket.io")(http, {
  cors:{origin:"*"}
});
const port = 3000;

http.listen(port, () => log(`server listening on port: ${port}`));
io.on("connection", (socket) => {
  log("connected");
  socket.on("message", (e) => {
    log(e);
    socket.broadcast.emit("message", e);
  });
});

//cors



io.on("disconect", (e) => log("conexion cerrada"));