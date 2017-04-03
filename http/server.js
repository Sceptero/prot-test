const express = require('express')
const multer = require('multer')

const PORT = 3202

let storage = multer.diskStorage({ destination: __dirname + '/../output/', filename: (req, file, cb) => cb(null, 'http-upload') })
let upload = multer({ storage: storage }).any()

app = express()

app.post('/', (req, res) => {
    upload(req, res, (err) => {
        if (err) {
            console.error(err)
            return
        }
        res.send('ok')
    })
})

app.listen(PORT);
console.log('HTTP Server listening...')