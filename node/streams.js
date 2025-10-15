const { createReadStream } = require('fs')

// reading data in 64 kb chunks by default 
const stream = createReadStream('./content/big.txt', {
    highWaterMark: 32000,
    encoding: 'utf-8'
})

stream.on('data', (res) => {
    console.log(res)
})

stream.on('error', (err) => {
    console.log(err)
})
