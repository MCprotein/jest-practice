import { CustomError, customError, error } from './throwFunction'

test('error가 잘 난다', () => {
  expect(() => error()).toThrow(Error)
  expect(() => customError()).toThrow(CustomError)
})

test('error가 잘 난다(try/catch)', () => {
  try {
    error()
  } catch (err) {
    expect(err).toStrictEqual(new Error())
  }
})

test('error가 잘 난다(try/catch)2', () => {
  try {
    customError()
  } catch (err) {
    expect(err).toStrictEqual(new CustomError())
  }
})
