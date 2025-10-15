const fs = require('fs')

const readFile = (path) => {
    return new Promise((resolve, reject) => {
        fs.readFile(path, 'utf-8', (err, res) => {
            if (err) {
                reject(err)
            } else {
                resolve(res)
            }
        })
    })
}

readFileAsync = async (path) => {
    try {
        const res = await readFile(path)
        console.log(res)
    } catch (err) {
        console.log(err)
    }
}

readFileAsync('./content/first.txt')

// readFile('./content/first.txt')
//     .then((res) => { console.log(res) })
//     .catch((err) => { console.log(err) })
