# npm 초기 설정

터미널에서 프로젝트 디렉티로 이동 후 `npm install` 실행 (외부 라이브러리들을 설치하는 과정)

# vscode 익스텐션

- Prettier: 코드를 일관된 형식으로 자동 정리해주는 코드 포매터
- ESLint: 코드 품질을 개선하고 잠재적 오류를 발견하기 위한 린팅 도구

# vscode 세팅 설정

## vscode 세팅창 진입 방법

- macOS: `Cmd + ,`
- Windows: `Ctrl + ,`

## 저장시 자동 포메팅 방법

저장시에 Prettier를 통해 일관된 코드 스타일로 자동 정리 후 저장할 수 있다.
Prettier는 프로젝트 루트 경로에 존재하는 `.prettierrc` 파일의 스타일링 규칙을 따른다.

1. 검색 창에 "Default Formatter" 검색
2. Default Formatter에서 "Prettier - Code formatter" 선택
3. 검색 창에 "Format On Save" 검색
4. Format On Save 체크박스 활성화

## vscode의 탭 간격 조정

js, node 진영에서는 탭 간격을 2로 설정하는 것이 일반적. (대부분의 오픈 소스 프로젝트가 탭 간격 2를 사용)
해커톤이 끝난 후에 다시 탭 간격을 돌려놓는 것을 잊지 않기.

1. 검색 창에 "Tab Size" 검색
2. Tab Size에서 탭 간격을 2로 변경 (vscode의 초기 기본값은 4)
