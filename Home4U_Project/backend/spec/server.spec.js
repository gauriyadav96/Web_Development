var request = require('request')
// function which takes description as first parameter
describe('Calc',() => {
  it('It should multiply 2 and 2', () => {
    expect(2*2).toBe(4)
  })
})

describe('get messages', () => {
  // add done to test async call
  it('should return 200', (done) => {
    request.get('http://localhost:3000/messages', (err, res) => {
      console.log(res)
      expect(res.statusCode).toEqual(200)
      done()
    })
  })
  it('should return a list that is not empty', (done) => {
    request.get('http://localhost:3000/messages', (err, res) => {
      console.log(res)
      // convert to JSON because res.body is string and we need length of list of messages
      expect(JSON.parse(res.body).length).toBeGreaterThan(0)
      done()
    })
  })
})

describe('get messages from user', () => {
  it('should return 200', (done) => {
    request.get('http://localhost:3000/messages/tim', (err, res) => {
      expect(res.statusCode).toEqual(200)
      done()
    })
  })
  it('name should be Tim', (done) => {
    request.get('http://localhost:3000/messages/tim', (err, res) => {
      expect(JSON.parse(res.body)[0].name).toEqual('tim')
      done()
    })
  })
})
