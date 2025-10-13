const path = require('path')

// platform path seperator
console.log(path.sep)

const filePath = path.join('/content', 'subdir', 'test.txt')
console.log(filePath)

const base = path.basename(filePath)
console.log(base)

const absolutePath = path.resolve(__dirname, 'content', 'subdir', 'test.txt')
console.log(absolutePath)
