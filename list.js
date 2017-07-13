const fs = require('fs')

// list('./some/path/toafile.log')
module.exports = (logFilePath, stream) => {
  const logLines = fs.readFileSync(logFilePath)
  stream.write(logLines.toString())
}
