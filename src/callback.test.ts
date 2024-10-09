import { timer } from './callback'

test('타이머 잘 실행되나?', (done) => {
  jest.useFakeTimers()
  timer((message) => {
    expect(message).toBe('success')
    done()
  })
})

test('시간아 빨리가라!', (done) => {
  expect.assertions(1)
  jest.useFakeTimers()
  timer((message: string) => {
    expect(message).toBe('success')
    done()
  }, 10_000)
  // 모든 시간이 전부 흐르게 설정
  // jest.runAllTimers()

  // 10초 흐르게
  jest.advanceTimersByTime(10_000)
})
