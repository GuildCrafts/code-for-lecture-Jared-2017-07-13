const append = require('../append')
const expect = require('chai').expect
const fs = require('fs')
const logFilePath = __dirname+'/../tmp/test-messages.log'

describe('append', function(){

  beforeEach(function(){
    // empty the log file
    fs.writeFileSync(logFilePath, '')
  })

  it('should take a message and append it to the logfile', function(){
    append(logFilePath, 'test log line 1')
    const logLines = fs.readFileSync(logFilePath).toString()
    expect(logLines).to.eql("test log line 1\n")
  })

  it('should take a message and append it to the logfile, multiple times', function(){
    append(logFilePath, 'test log line 1')
    append(logFilePath, 'test log line 2')
    append(logFilePath, 'test log line 3')
    append(logFilePath, 'test log line 4')
    const logLines = fs.readFileSync(logFilePath).toString()
    expect(logLines).to.eql(
      "test log line 1\n"+
      "test log line 2\n"+
      "test log line 3\n"+
      "test log line 4\n"
    )
  })
})
