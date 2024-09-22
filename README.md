Jest에서 ESM은 아직 experimental 기능 <br>
Ref: https://jestjs.io/docs/ecmascript-modules

`$ npx ts-jest config:init` 실행하면 `jest.config.js` 파일이 생성됨. <br>
typescript 쓸거면 보통 ESM 대신 CSM으로 설정하니 `jest.config.js`에서도 맞춰줘야하고, <br>
`jest.config.js`에서 preset을 `ts-jest`로 설정하기. <br>