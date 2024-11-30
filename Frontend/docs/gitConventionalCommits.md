# Git 커밋메세지 컨벤션

## 구조

형태

```plaintext
<타입>[적용 범위(선택 사항)]: <설명>
```

예시

```plaintext
Feat: 회원가입 기능 구현
```

## 타입 종류

- `Feat`: 새로운 기능 추가
- `Design`: CSS 등 UI 디자인 변경
- `Refactor`: 코드 리팩토링
- `Fix`: 버그 수정
- `Docs`: 문서 작업, 수정
- `Style`: 코드 스타일 및 포맷 변경(코드 자체의 변경은 없는 경우, 함수/변수명 변경 포함)
- `Test`: 테스트 코드 작성, 테스트 리팩토링(프로덕션 코드 변경 X)
- `Chore`: 소스 코드를 건들지 않는 작업 - 빌드 테스트 업데이트, 패키지 매니저를 설정하는 경우(ex: gitignore)
- `Init`: 초기화
- `Build`: 빌드 관련 파일 수정
- `CI`: CI 관련 설정 수정
- `Rename`: 파일 혹은 폴더명을 수정하거나 옮기는 작업만 수행
- `Remove`: 파일을 삭제하는 작업만 수행

# 참고 사이트

- [팀 프로젝트에 꼭 필요한 Commit Convention: 이슈 번호와 커밋 타입으로 관리하기](https://jaypedia.tistory.com/374)
- [효율적인 commit message 작성을 위한 conventional commits](https://medium.com/humanscape-tech/%ED%9A%A8%EC%9C%A8%EC%A0%81%EC%9D%B8-commit-message-%EC%9E%91%EC%84%B1%EC%9D%84-%EC%9C%84%ED%95%9C-conventional-commits-ae885898e754)
