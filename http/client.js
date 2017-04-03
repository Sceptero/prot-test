const request = require('superagent')
const fs = require('fs');

const PORT = 3202

console.time('http')
request.post(`localhost:${PORT}/`)
    .set('Content-Type', 'application/octet-stream')
    .attach('payload', __dirname + '/../input/payload')
    .end((err, res) => {
        if (res.text === 'ok') console.timeEnd('http')
        else console.error('http error')
    })