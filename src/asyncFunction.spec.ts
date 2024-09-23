import { okPromise, okAsync, noPromise } from './asyncFunction'
import * as fns from './asyncFunction'

test('okPromise 테스트', () => {
  const okSpy = jest.fn(okPromise)
  return expect(okSpy()).resolves.toBe('ok')
})

test('okPromise 테스트2', () => {
  const okSpy = jest.fn(okPromise)
  return okSpy().then((result) => {
    expect(result).toBe('ok')
  })
})

test('okPromise 테스트3', async () => {
  const okSpy = jest.fn(okPromise)
  const result = await okSpy()
  expect(result).toBe('ok')
})

test('noPrmoise 테스트', () => {
  const noSpy = jest.fn(noPromise)
  return noSpy().catch((result) => {
    expect(result).toBe('no')
  })
})

test('noPrmoise 테스트2', () => {
  const noSpy = jest.fn(noPromise)
  return expect(noSpy()).rejects.toBe('no')
})

test('noPrmoise 테스트3', async () => {
  const noSpy = jest.fn(noPromise)
  try {
    const result = await noSpy()
  } catch (err) {
    expect(err).toBe('no')
  }
})

test('noPrmoise 테스트4', async () => {
  const noSpy = jest.fn(noPromise)
  await expect(noSpy()).rejects.toBe('no')
})

test('okAsync 테스트', () => {
  const okSpy = jest.fn(okAsync)
  return expect(okSpy()).resolves.toBe('ok')
})

test('okAsync 테스트2', () => {
  const okSpy = jest.fn(okAsync)
  return okSpy().then((result) => {
    expect(result).toBe('ok')
  })
})

test('okPromise 테스트3', async () => {
  const okSpy = jest.fn(okAsync)
  const result = await okSpy()
  expect(result).toBe('ok')
})

test('okPromise fns 테스트', () => {
  jest.spyOn(fns, 'okPromise').mockReturnValue(Promise.resolve('ok'))
  jest.spyOn(fns, 'okPromise').mockResolvedValue('ok')
  return expect(fns.okPromise()).resolves.toBe('ok')
})

test('noPrmoise fns 테스트', () => {
  jest.spyOn(fns, 'noPromise').mockRejectedValue('no')
  expect(fns.noPromise()).rejects.toBe('no')
})
