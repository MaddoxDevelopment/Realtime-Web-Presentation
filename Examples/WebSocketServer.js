const WebSocket = require('ws');
const stdin = process.openStdin(); 

const wss = new WebSocket.Server({
  port: 3000
});

wss.on("connection", (socket) => {
    console.log("WebSocket has connected.")
    stdin.addListener("data", function (d) {
        socket.send(d.toString());
    });    
    socket.on("message", (data) => {
        console.log("Recieved message from client,", data);
    })
})
