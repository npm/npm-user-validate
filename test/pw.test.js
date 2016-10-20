var test = require('tap').test
var v = require('../npm-user-validate.js').pw

test('pw contains a \'', function (t) {
  var err = v('\'')
  t.type(err, 'null')
  t.end()
})

test('pw contains a :', function (t) {
  var err = v(':')
  t.type(err, 'null')
  t.end()
})

test('pw contains a @', function (t) {
  var err = v('@')
  t.notOk(err, 'null')
  t.end()
})

test('pw contains a "', function (t) {
  var err = v('"')
  t.type(err, 'null')
  t.end()
})

test('pw is ok', function (t) {
  var err = v('duck')
  t.type(err, 'null')
  t.end()
})
