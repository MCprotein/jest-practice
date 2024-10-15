import { first, second, third } from './order'

test('first -> second -> third - 함수 실행 순서 테스트', () => {
  const spy1 = jest.fn(first)
  const spy2 = jest.fn(second)
  const spy3 = jest.fn(third)
  ;(spy1 as any)(1, 2, 3)
  spy2()
  spy3()
  spy1()
  console.log(spy1.mock)
  console.log(spy2.mock.invocationCallOrder[0])
  console.log(spy3.mock.invocationCallOrder[0])
  expect(spy1.mock.invocationCallOrder[0]).toBeLessThan(spy2.mock.invocationCallOrder[0])
  expect(spy3.mock.invocationCallOrder[0]).toBeGreaterThan(spy2.mock.invocationCallOrder[0])
})

test.skip('first -> second -> third 2 - 함수 실행 순서 테스트', () => {
  const spy1 = jest.fn(first)
  const spy2 = jest.fn(second)
  const spy3 = jest.fn(third)
  ;(spy1 as any)(1, 2, 3)
  spy2()
  spy3()
  spy1()
  console.log(spy1.mock)
  console.log(spy2.mock.invocationCallOrder[0])
  console.log(spy3.mock.invocationCallOrder[0])
  expect(spy1).toHaveBeenCalledBefore(spy2)
  expect(spy3.mock.invocationCallOrder[0]).toBeGreaterThan(spy2.mock.invocationCallOrder[0])
})

test('인수의 일부 테스트', () => {
  const fn = jest.fn()
  fn({
    a: {
      b: {
        c: 'hello'
      },
      d: 'bye'
    },
    e: ['f']
  })
  
  // 첫 번째로 호출된 첫 번째 인자의 a.b.c가 hello인지 테스트
  expect(fn.mock.calls[0][0].a.b.c).toBe('hello')
})
