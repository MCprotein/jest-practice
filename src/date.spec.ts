import { after3days } from './date'

afterEach(() => {
  jest.useRealTimers()
})

test('3일 후를 리턴한다.', () => {
  jest.useFakeTimers().setSystemTime(new Date(2024, 9, 10))
  expect(after3days()).toStrictEqual(new Date(2024, 9, 13))
})

test('0.1 + 0.2 는 0.3', () => {
  expect(0.1 + 0.2).toBeCloseTo(0.3)
})
