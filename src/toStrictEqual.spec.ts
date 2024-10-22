import { obj } from './toStrictEqual'

test('obj 테스트', () => {
  expect(obj()).toStrictEqual({ a: 'hello' })
  expect(obj()).not.toStrictEqual({ a: 'hello1' })
})

test('배열끼리도 toStrictEqual 써야한다.', () => {
  expect([1, 2, 3]).toStrictEqual([1, 2, 3])
  expect([1, 2, 3]).not.toBe([1, 2, 3])
})

test('아무거나 인정', () => {
  expect(obj()).toStrictEqual({ a: expect.any(String) })
})
