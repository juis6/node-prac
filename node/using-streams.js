const http = require('http')
const fs = require('fs')

const PORT = 5000
const server = http.createServer()

server.on('request', (req, res) => {
    const fileStream = fs.createReadStream('./content/big.txt', 'utf-8')

    fileStream.on('open', () => {
        fileStream.pipe(res)
    })
})

server.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})
