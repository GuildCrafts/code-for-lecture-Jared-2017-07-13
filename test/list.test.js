const expect = require('chai').expect
const fs = require('fs')
const logFilePath = __dirname+'/../tmp/test-messages.log'
const list = require('../list')

describe('list', function(){
  beforeEach(function(){
    fs.writeFileSync(logFilePath,
      "this log file data\n"+
      "was put here in a mocha\n"+
      "beforeEach function\n"
    )
  })

  it('should read and print the whole log file', function(){
    let output
    const fakeStream = {
      write: function(message){
        output = message
      }
    }
    list(logFilePath, fakeStream)
    expect(output).to.eql(
      "this log file data\n"+
      "was put here in a mocha\n"+
      "beforeEach function\n"
    )
  })
})
