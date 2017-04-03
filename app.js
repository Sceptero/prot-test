const cp = require('child_process')

let tcpClient = cp.fork(__dirname + '/tcp/tcp-client.js')
let tcpServer = cp.fork(__dirname + '/tcp/tcp-client.js')

tcpServer.send({command: 'start', port: '3201'})

tcpClient.send({command: 'start', port: '3201'})
