const { test } = require('node:test')
const assert = require('node:assert')
const v = require('../').pw

test('pw contains a \'', function () {
  const err = v('\'')
  assert.strictEqual(err, null)
})

test('pw contains a :', function () {
  const err = v(':')
  assert.strictEqual(err, null)
})

test('pw contains a @', function () {
  const err = v('@')
  assert.strictEqual(err, null)
})

test('pw contains a "', function () {
  const err = v('"')
  assert.strictEqual(err, null)
})

test('pw is ok', function () {
  const err = v('duck')
  assert.strictEqual(err, null)
})
