var test = require('tap').test
var v = require('../npm-user-validate.js').firstLastName

test('username must not inclue <', function (t) {
  err = v('ERR<SCRIPT')
  t.type(err, 'object')
  t.end()
})

test('username may not include >', function (t) {
  err = v('SCRIPT>')
  t.type(err, 'object')
  t.end()
})