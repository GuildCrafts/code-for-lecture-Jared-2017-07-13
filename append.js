const fs = require('fs')

module.exports = (logFilePath, message) => {
  fs.appendFileSync(logFilePath, message+"\n")
}
