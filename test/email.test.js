const { test } = require('node:test')
const assert = require('node:assert')
const v = require('../').email

test('email misses an @', function () {
  const err = v('namedomain')
  assert.strictEqual(typeof err, 'object')
})

test('email is longer then 254 characters', function () {
  const str = '@'.repeat(255)
  const err = v(str)
  assert.strictEqual(typeof err, 'object')
})

test('email misses a dot', function () {
  const err = v('name@domain')
  assert.strictEqual(typeof err, 'object')
})

test('email misses a string before the @', function () {
  const err = v('@domain')
  assert.strictEqual(typeof err, 'object')
})

test('email is ok', function () {
  const err = v('name@domain.com')
  assert.strictEqual(err, null)
})
