const express = require('express')
const app = express()
const port = 3000

app.get('/date', (req, res) => res.send(new Date().toString()))

app.listen(port, () => console.log(`Listening on port ${port}!`))