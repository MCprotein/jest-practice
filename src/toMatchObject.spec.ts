import { obj } from './toMatchObject'

test('클래스 비교는 toMatchObject로 해야 한다.', () => {
  expect(obj('hello')).toMatchObject({ a: 'hello' })
  expect(obj('hello')).not.toStrictEqual({ a: 'hello' })
})

test('공식문서 예제', () => {
  expect([{ foo: 'bar' }, { baz: 1, extra: 'quux' }]).toMatchObject([{ foo: 'bar' }, { baz: 1 }])

  expect([{ foo: 'bar' }, { baz: 1, extra: 'quux' }]).not.toMatchObject([
    { foo: 'bar' },
    { baz: 1, name: 'hi' }
  ])
})
