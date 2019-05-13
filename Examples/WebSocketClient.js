const WebSocket = require('ws');
const stdin = process.openStdin(); 

const ws = new WebSocket('ws://localhost:3000');
let isOpen = false; 

ws.on('open', function open() {
  console.log("Successfully connected to server.")
  isOpen = true;
});
 
ws.on('message', function incoming(data) {
    console.log("Recieved from server,", data.toString());
});

stdin.addListener("data", function (d) {
    if(!isOpen) {
        return;
    }
    ws.send(d.toString());
});
