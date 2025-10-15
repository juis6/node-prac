const names = require('./names-module')
const utils = require('./utils-module')

utils.sayHi(names.peter)
utils.sayHi(names.john)

// mind-grenade !!!
require('./mind-grenade-module')
