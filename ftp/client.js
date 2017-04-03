const FTPS = require('ftps')


let ftps = new FTPS({
    host: 'localhost',
    username: 'test',
    requiresPassword: false,
    protocol: 'ftp',
    autoConfirm: true
})

console.time('ftp')
ftps.addFile('../input/payload', 'ftp-output').exec(() => console.timeEnd('ftp'))