Jest에서 ESM은 아직 experimental 기능 <br>
Ref: https://jestjs.io/docs/ecmascript-modules

`$ npx ts-jest config:init` 실행하면 `jest.config.js` 파일이 생성됨. <br>
typescript 쓸거면 보통 ESM 대신 CSM으로 설정하니 `jest.config.js`에서도 맞춰줘야하고, <br>
`jest.config.js`에서 preset을 `ts-jest`로 설정하기. <br><br>

toMatchObject는 객체 속성의 subset을 비교한다. <br>
즉, 객체 속성의 일부만 비교하는데, expect에 있는 객체가 actual 객체의 subset이면 통과한다. <br><br>

mockImplementation은 함수 구현 자체를 갈아낄 수 있다.<br>
mockReturnValue는 함수의 반환값을 갈아낄 수 있다.<br>
once가 붙으면 한 번만 그걸 적용한다는것을 의미한다. <br><br>

resolves 사용시 return을 붙여야함 [참고](https://jestjs.io/docs/asynchronous) <br><br>

라이프사이클 훅을 일부 테스트에만 적용하고 싶을때 describe를 사용해도 괜찮다. <br><br>

jest의 mock객체를 더 간단하게 사용할 수 있는 jest-extended 패키지<br>
https://www.npmjs.com/package/jest-extended <br><br>

### jest.fn vs jest.spyOn

jest.fn은 새로운 함수를 반환한다.
jest.spyOn은 기존 함수를 감싸서 mock을 만든다. <br><br>

jest는 기본적으로 multi thread로 실행한다. <br>
그래서 테스트가 순서대로 실행되지 않을 수 있다. <br>
`--runInBand` 옵션을 주면 single thread로 실행된다. <br>
monorepo 일때는 오히려 runInBand가 더 빠를 수 있다. <br>

--maxWorkers로 worker의 수를 정할 수 있다. <br><br>

--watchAll 옵션을 주면 파일이 변경될 때마다 전체 테스트를 다시 실행한다. <br>
--watch 옵션을 주면 파일이 변경될 때마다 해당 파일 테스트만 다시 실행한다 <br><br>

테스트 이름은 비개발자도 확인할 수 있도록 일반적인 표현을 사용한다.<br>
red, green, refactor 전략 <br>