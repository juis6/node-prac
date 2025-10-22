const express = require('express')
const path = require('path')

const PORT = 5000
const app = express()

const people = require('./routes/people')
const auth = require('./routes/auth')

// Middleware для статичних файлів та парсингу
app.use(express.static(path.join(__dirname, 'methods-public')))
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.use('/api/people', people)
app.use('/login', auth)

// Головна сторінка
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'methods-public', 'index.html'))
})

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`)
})
