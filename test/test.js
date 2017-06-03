import test from 'ava'
import sum from '../lib'

test('Test 1', t => {
  t.is(sum([]), 0)
})

test('Test 2', t => {
  t.is(sum([1]), 1)
})

test('Test 3', t => {
  t.is(sum([1, 2]), 3)
})

test('Test 4', t => {
  t.is(sum([0, 1, 2, 3]), 6)
})

test('Test 5', t => {
  t.is(sum([27, 421, -8, 0, -154, 23, 11, 256]), 576)
})

test('Test Infinity', t => {
  t.is(sum([4, -1024, 6, Infinity]), Infinity)
})

test('Test -Infinity', t => {
  t.is(sum([4, 4096, 77, -Infinity]), -Infinity)
})

test('Test char', t => {
  const error = t.throws(() => {
    sum([84, 256, 6, '1', 0, -27])
  }, Error)

  t.is(error.message, 'Only numeric values are allowed')
})

test('Test NaN', t => {
  const error = t.throws(() => {
    sum([4, 5, 6, NaN])
  }, Error)

  t.is(error.message, 'Only numeric values are allowed')
})

test('Test null', t => {
  const error = t.throws(() => {
    sum([84, 512, 6, null, 0, -27])
  }, Error)

  t.is(error.message, 'Only numeric values are allowed')
})
