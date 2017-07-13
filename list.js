const fs = require('fs')
const logFilePath = __dirname+'/messages.log'

module.exports = () => {
  const logLines = fs.readFileSync(logFilePath)
  process.stdout.write(logLines.toString())
}
