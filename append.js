const fs = require('fs')
const logFilePath = __dirname+'/messages.log'

module.exports = (message) => {
  fs.appendFileSync(logFilePath, message+"\n")
}
