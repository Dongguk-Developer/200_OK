# 네이밍 컨벤션

- 컴포넌트 함수 이름: `PascalCase` << _중요_
- 페이지 컴포넌트 함수 이름: `PascalCase`, 이름 끝에 `Page`로 끝나야 함 (`PascalCasePage`)
- 일반 함수 이름: `camelCase`
- 변수 이름: `camelCase`
- CSS 선택자 이름(class, id): `kebab-case`

# 파일 이름 네이밍 컨벤션

- 컴포넌트가 포함된 파일: `PascalCase.jsx`, 컴포넌트 함수 이름이랑 동일하게 작성 << _중요_
- 그 외 파일: `camelCase.js`, `camelCase.module.css`...

css 파일명은 jsx 파일명과 동일하게 작성
`TestPage.jsx` -> `TestPage.module.css`

# .js, .jsx 확장자 선택 방법

- `.js`: React 컴포넌트를 포함하지 않고, 순수 JavaScript 로직만 포함할 때
- `.jsx`: React 컴포넌트를 포함하는 JavaScript 로직일 때

# CSS 컨벤션

jsx의 html 최상위 태그에 `className`가 있어야 함 << _필수_
최상위 태그의 `className`명은 컴포넌트 명과 동일하게 작성하되 `kebab-case`로 작성 (`TestPage` -> `test-page`)

# var 키워드 사용 지양

`var` 대신 `let`, `const` 사용 권장

- `let`: 재할당 가능한 변수 선언
- `const`: 재할당 불가능한 상수 선언
