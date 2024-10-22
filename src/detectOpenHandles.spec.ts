beforeEach(() => {
  jest.useFakeTimers()
})

test('openHandles', () => {
  setInterval(() => {
    console.log('interval')
  })
  expect(1).toBe(1)
})

afterAll(() => {
  jest.clearAllTimers()
})
