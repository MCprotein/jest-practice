beforeEach(() => {
  jest.resetModules()
})

test('first import', async () => {
  const c = await import('./mockClass')
  ;(c as any).prop = 'hello'
  expect(c).toBeDefined()
})

test('first import', async () => {
  const c = await import('./mockClass')

  expect((c as any).prop).toBeUndefined()
})
