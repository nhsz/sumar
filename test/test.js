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
