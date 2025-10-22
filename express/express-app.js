const express = require('express')
const path = require('path')

const PORT = 5000

const app = express()

app.use(express.static('./public'))

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, './navbar-app/index.html'))
})

app.all('*', (req, res) => {
    res.status(404).send('Not Found')
})

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})
