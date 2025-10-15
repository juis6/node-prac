const http = require('http')
const EventEmitter = require('events')

// custom event
const customEmitter = new EventEmitter()

customEmitter.on('response', (name, id) => {
    console.log(`recieved data: { "name": ${name}, "id": ${id} }`)
})
customEmitter.on('response', () => {
    console.log('some other data recieved')
})
customEmitter.emit('response', 'Oleh', 4)

const server = http.createServer()

// build-in event for HTTP server
server.on('request', (req, res) => {
    res.end('Welcome Home!')
})

server.listen(5000, () => {
    console.log('Listening on port 5000')
})
