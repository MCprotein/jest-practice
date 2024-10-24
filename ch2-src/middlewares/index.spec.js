const { isLoggedIn, isNotLoggedIn } = require('./index')

// 기획자자가 ~안된다. 라고 하면 이것을 테스트 이름으로 쓴다.
// 개발자가 아니라 기획자와 QA의 언어로 테스트 이름을 작성한다.
// 구체적인 구현을 써놓으면 다른사람이 의미를 잘 모를수도 있고, 나중에 봤을때 기억안날수도 있다.
describe('isLoggedIn', () => {
  test('로그인을 했으면 next를 호출한다.', () => {
    const req = {
      // 로그인을 한 상태면 true를 반환
      isAuthenticated() {
        return true
      }
    }
    const res = {}
    const next = jest.fn()
    isLoggedIn(req, res, next)
    expect(next).toHaveBeenCalledTimes(1)
  })
})

describe('isNotLoggedIn', () => {
  test('로그인안 한 상태면 next를 호출한다.', () => {
    const req = {
      // 로그인을 한 상태면 true를 반환
      isAuthenticated() {
        return false
      }
    }
    const res = {}
    const next = jest.fn()
    isNotLoggedIn(req, res, next)
    expect(next).toHaveBeenCalledTimes(1)
  })
})
