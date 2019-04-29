const express = require('express')
const app = express()
const port = 3000
const stdin = process.openStdin();

const connections = []

app.get('/date', (req, res) => {
    // Keep the connection alive for 1 hour max.
    req.setTimeout(3.6e+6)
    connections.push(res);
});

app.listen(port, () => console.log(`Listening on port ${port}!`))

stdin.addListener("data", function (d) {
    connections.forEach((res, index) => {
        try {
            res.send(d);
            connections.splice(index, 1)
        } catch (ex) {
            console.log(ex);
        }
    })
});

