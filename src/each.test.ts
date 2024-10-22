test('1 더하기 1은 2', () => {
  expect(1 + 1).toBe(2)
})

test('2 더하기 3은 5', () => {
  expect(2 + 3).toBe(5)
})

test('3 더하기 4은 7', () => {
  expect(3 + 4).toBe(7)
})

test.each([
  [1, 1, 2],
  [2, 3, 5],
  [3, 4, 7]
])('%i 더하기 %i는 %i', (a, b, c) => {
  expect(a + b).toBe(c)
})

test.each([
  { a: 1, b: 1, expected: 2 },
  { a: 1, b: 2, expected: 3 },
  { a: 2, b: 1, expected: 3 }
])('.add($a, $b)', ({ a, b, expected }) => {
  expect(a + b).toBe(expected)
})
