import {add} from './add'
import {adjust} from './adjust'
import {pipe} from './pipe'

const list = [0, 1, 2]
const expected = [0, 11, 2]

test('happy', () => {})

test('happy', () => {
  expect(adjust(1, add(10), list)).toEqual(expected)
})

test('with curring type 1 1 1', () => {
  expect(adjust(1)(add(10))(list)).toEqual(expected)
})

test('with curring type 1 2', () => {
  expect(adjust(1)(add(10), list)).toEqual(expected)
})

test('with curring type 2 1', () => {
  expect(adjust(1, add(10))(list)).toEqual(expected)
})

test('with negative index', () => {
  expect(adjust(-2, add(10), list)).toEqual(expected)
})

test('when index is out of bounds', () => {
  const list = [0, 1, 2, 3]
  expect(adjust(4, add(1), list)).toEqual(list)
  expect(adjust(-5, add(1), list)).toEqual(list)
})
