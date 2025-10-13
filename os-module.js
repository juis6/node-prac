const os = require('os')

// info about current user
const user = os.userInfo()
console.log(user)

// system uptime
const uptime = os.uptime
console.log(`System Uptime: ${uptime} s`)

const currentOS = {
    type: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem()
}

console.log(currentOS)
