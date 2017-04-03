const fs = require('fs')
const net = require('net')
const crypto = require('crypto')

const PORT = 3201

let hash = crypto.createHash('md5')

let client = new net.Socket()

client.connect(PORT, '127.0.0.1', () => {
    let fileStream = fs.createReadStream(__dirname + '/../input/payload')
    fileStream.on('open', () => {
        console.time('tcp')
        fileStream.pipe(client)
    })
});

client.on('end', () => {
    console.timeEnd('tcp')
})