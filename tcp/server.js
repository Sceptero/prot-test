const fs = require('fs')
const net = require('net')

const PORT = 3201

let server = net.createServer((socket) => {
    let writeStream = fs.createWriteStream(__dirname + '/../output/tcp-output')

    writeStream.on('finish', () => {
        socket.end()
    })

    socket.pipe(writeStream)
})

server.listen(PORT)
console.log('TCP Server listening...')