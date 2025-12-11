const { test } = require('node:test')
const assert = require('node:assert')
const v = require('../').username

test('username must be lowercase', function () {
  const err = v('ERRR')
  assert.strictEqual(typeof err, 'object')
  assert.match(err.message, /lowercase/)
})

test('username may not contain non-url-safe chars', function () {
  const err = v('f  ')
  assert.strictEqual(typeof err, 'object')
  assert.match(err.message, /url-safe/)
})

test('username may not contain illegal characters', function () {
  const err = v("ben's")
  assert.strictEqual(typeof err, 'object')
  assert.match(err.message, /illegal character "'"/)
})

test('username may not start with "."', function () {
  const err = v('.username')
  assert.strictEqual(typeof err, 'object')
  assert.match(err.message, /start with.*\./)
})

test('username may not be longer than 214 characters', function () {
  // eslint-disable-next-line max-len
  const err = v('bacon-ipsum-dolor-amet-tongue-short-loin-landjaeger-tenderloin-ball-tip-pork-loin-porchetta-pig-pork-chop-beef-ribs-pork-belly--shankle-t-bone-turducken-tongue-landjaeger-pork-loin-beef-chicken-short-loin-and-pickle')
  assert.strictEqual(typeof err, 'object')
  assert.match(err.message, /less than or equal to 214/)
})

test('username may be as long as 214 characters', function () {
  // eslint-disable-next-line max-len
  const err = v('bacon-ipsum-dolor-amet-tongue-short-loin-landjaeger-tenderloin-ball-tip-pork-loin-porchetta-pig-pork-chop-beef-ribs-pork-belly--shankle-t-bone-turducken-tongue-landjaeger-pork-loin-beef-chicken-short-loin-porchetta')
  assert.strictEqual(err, null)
})

test('username is ok', function () {
  const err = v('ente')
  assert.strictEqual(err, null)
})
