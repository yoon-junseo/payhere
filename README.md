# 프로그래머스 데브 매칭 페이히어 과제

## 프로젝트 설정 및 실행 방법

```javascript
// 1. 디렉터리 root에 env 파일 생성
REACT_APP_GITHUB_API_URL = 'https://api.github.com';

REACT_APP_FIREBASE_API_KEY = 'AIzaSyDPz65K0r8xz-f7w45j6Hgu41tDG_0OK-A';
REACT_APP_FIREBASE_AUTH_DOMAIN = 'payhere-b349b.firebaseapp.com';
REACT_APP_FIREBASE_PROJECT_ID = 'payhere-b349b';
REACT_APP_FIREBASE_STORAGE_BUCKET = 'payhere-b349b.appspot.com';
REACT_APP_FIREBASE_MESSAGINGSENDER_ID = '467001804372';
REACT_APP_FIREBASE_APP_ID = '1:467001804372:web:c49754611ab359ecd2cfc1';
REACT_APP_FIREBASE_MEASUREMENT_ID = 'G-M19XNGVGCP';

REACT_APP_CRYPTO_SECRET_KEY = 'NHHIcgknae59jBbpW7NAgrdtlFeM0SRX';
```

```javascript
// 2. 패키지 파일 다운로드
npm i
```

```javascript
// 3. 프로그램 실행
npm run dev // 프로그램
npm run storybook // 스토리북
```

## 기술 스택과 선정 이유

### TypeScript

- 정적 타입을 지원하기 때문에 컴파일 타임에 오류를 체크할 수 있기 때문에 사용했습니다.
- 명시적인 타입 지정으로 변수, 함수등의 선언 의도를 명확하게 할 수 있기 때문에 사용했습니다. 이로 인해 가독성을 높일 수 있다고 생각했습니다.

### styled-components

- CSS를 컴포넌트 단위로 관리하여 재사용성을 높이기 위해 사용했습니다.
- 컴포넌트의 props를 참조할 수 있기 때문에 JavaScript 환경을 최대한 활용할 수 있습니다.
- CSS의 className 중복을 걱정할 필요가 없습니다.

### Webpack

- 프로젝트 초기 설정을 빠르게 하기 위해서 만들어둔 템플릿을 활용했습니다. 해당 템플릿은 Webpack으로 번들링 되어 있습니다.
- CRA와 다르게 필요한 설정들만 다운로드하여 사용하기 때문에 프로젝트 무게가 가볍습니다. (커스텀 용이) 따라서 애플리케이션의 성능 및 속도가 개선됩니다.

### Storybook

- 컴포넌트 코드를 작성한 이후 해당 컴포넌트를 직접 호출하지 않아도 확인할 수 있는 장점이 있기 때문에 사용했습니다.
- 확장성을 고려한다면 Storybook을 활용하여 필요한 컴포넌트를 찾아서 사용할 수 있다는 장점이 있다고 생각합니다.

### swr

- data fetch를 위한 상태 관리 라이브러리로, 데이터를 캐싱하기 때문에 서버 요청을 줄일 수 있는 장점이 있어서 사용했습니다.

### react-intersection-observer

- IntersectionObserver API를 활용하는 것보다 코드가 깔끔해서 선택했습니다.
- 기존에 무한 스크롤 Hook 만들어둔 것을 활용하기 위해서 선택했습니다.

### firebase

- github API에 요청 제한 횟수가 있기 때문에 제한 횟수를 늘리기 위해서는 인증이 필요합니다. github 인증 API는 cors가 발생하는데, 이를 해결하기 위해 비용이 가장 적게 드는 firebase를 선택했습니다. ([관련 내용](https://github.com/yoon-junseo/payhere/issues/3))

### crypto-js

- localStorage 사용시, 암호화를 하지 않으면 개발자 도구로 확인이 가능하기 때문에 암호화를 시킬 필요가 있다고 생각해서 사용했습니다.

## 구현 기능

1. 검색창에 Repository명을 입력해서 Repository를 검색할 수 있다. (O)
   - debounce를 활용해서 입력이 완료되면 검색 API 요청을 처리했다.
   - useInfiniteScroll Hook을 통해서 무한 스크롤을 구현했다.
   - Repository는 owner, Repository명, 사용된 언어, star 갯수, fork 갯수, watcher 갯수, 열려있는 issue 갯수를 표현한다.
2. 검색된 Public Repository를 등록할 수 있다. (O)
   - crypto-js를 활용해서 localStorage에 Repository를 암호화하여 저장했다.
   - util 함수를 통해 localStorage를 관리할 수 있다.
   - useStoreRepository Hook을 통해 Repository 등록, 삭제 로직을 분리했다.
   - Repository에 마우스를 올리면 등록 가능한 버튼이 생긴다.
3. 등록된 Repository를 삭제할 수 있다. (O)
   - useStoreRepository를 통해 Repository 등록, 삭제 로직을 분리했다.
   - Repository에 마우스를 올리면 삭제 가능한 버튼이 생긴다.
4. 등록된 각각의 Public Repository의 issue를 한 페이지에서 모아서 볼 수 있다. (O)
   - issue의 제목, Repository명, 할당된 사람, label, 이슈 번호, 열린거나 닫힌 날짜와 사람에 대한 정보를 표현했다.
   - 생성자를 누르면 해당 깃허브 사이트로 이동한다.
   - Repository명을 클릭하면 해당 github Repository로 이동한다.
   - 이슈명을 클릭하면 해당 github 이슈로 이동한다.
   - 할당된 사람(Avatar)을 클릭하면 클릭된 사람의 github 페이지로 이동한다.
   - useInfiniteScroll Hook을 통해서 무한 스크롤을 구현했다.

- 로그인
  - cors 해결을 위해 비용이 가장 적게 드는 firebase로 깃허브 인증을 구현했다.
- 이슈 필터링
  - 이슈의 state에 따라서 필터링 가능하게 구현했다.
