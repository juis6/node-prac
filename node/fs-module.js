const { readFileSync, writeFileSync } = require('fs')
const fs = require('fs')

const first = readFileSync('./content/first.txt', 'utf8')
const second = readFileSync('./content/second.txt', 'utf8')

console.log(first, second)

writeFileSync('./content/result-sync.txt', `Concated files:\n\t${first}\n\t${second}\n`)

// append context to the file
writeFileSync('./content/result-sync.txt', `New context: Hello World!\n`, { flag: 'a' })

// callback methods
console.log('task #1')
fs.readFile('./content/first.txt', (err, res) => {
    if (err) {
        console.log(err.message)
        return
    }
    console.log(res)
})

console.log('task #2')
fs.readFile('./content/third.txt', (err, res) => {
    if (err) {
        console.log(err.message)
        return
    }
    console.log(res)
})
