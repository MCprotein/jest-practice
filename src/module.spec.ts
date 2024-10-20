import { obj } from './module'
// import { obj } from './__mocks__/module'

// 모듈을 통째로 mocking
// jest.mock은 hoisting 되어서 scope 안에서 선언해도 실행될때는 바깥쪽으로 빠져나온다.
// jest.mock('./module', () => {
//   return {
//     // export default 내용을 재정의
//     // obj: { a: 'b' },
//     // prop: 'hello'
//
//     // 실제 값을 가져온다
//     obj: {
//       ...jest.requireActual('./module').obj,
//       method3: jest.fn()
//     }
//   }
// })
jest.mock('./module')
test('모듈을 전부 모킹', () => {
  // jest.spyOn(obj, 'method3')
  jest.replaceProperty(obj, 'prop', 'replaced')
  console.log(obj)
})
