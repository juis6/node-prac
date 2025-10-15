const http = require('http')

const server = http.createServer((req, res) => {
    console.log(req.method, req.url)

    if (req.url === '/') {
        res.end('Welcome to the Home Page!')
    }
    if (req.url === '/about') {
        res.end('Here is the About Page! ')
    }
    else {
        res.end(`
            <h1>Opps ;(</h1>
            <p>Cannot load the page u are looking for!</p>
            <a href="/">Home Page</a>
        `)
    }
})

server.listen(5000, () => {
    console.log('Listening on port 5000')
})
