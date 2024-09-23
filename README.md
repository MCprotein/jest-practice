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


