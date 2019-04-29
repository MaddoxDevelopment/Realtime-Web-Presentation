const http = require('http');

http.get({
    agent : false,
    path : '/date',
    hostname : 'localhost',
    port : 3000
}, (res) => {
    res.on('data', data => {
        console.log(data.toString());
    })
})