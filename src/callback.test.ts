import { timer } from './callback'

test('타이머 잘 실행되나?', (done) => {
  timer((message) => {
    expect(message).toBe('success')
    done()
  })
})
