## 🆕 설치하고 실행할 명령어

- 노드 모듈 설치

  ```
  npm i
  ```

- 스타일링 방법: styled-componenets

  ```
  npm install styled-components
  ```

- react-router 설치

  ```
  npm i react-router-dom
  ```

- tailwind 설치

  ```
  npm install -D tailwindcss
  ```

- redux & react-redux 설치

  ```
  npm i redux react-redux
  ```

## ❗ 참고할 것들

- styled-components 사용방법 (예시)

  ```javascript
  import styled from "styled-components";

  const StyledBox = styled.div`
    border: 1px solid black;
    border-radius: 5px;
  `;
  const Box = ({ text }) => {
    return <StyledBox>{text}</StyledBox>;
  };
  ```

- 카카오 지도 사용 방법

  리액트에서 카카오 지도를 사용하기 위해서는 Vue와 다르게 사용해야 합니다.

  ```javascript
  var mapContainer = document.getElementById("map"),
    mapOption = {
      center: new kakao.maps.LatLng(33.450701, 126.570667),
      level: 3,
    };

  var map = new kakao.maps.Map(mapContainer, mapOption);
  ```

  기존에는 위와 같은 코드로 지도를 사용할 수 있었지만, React 에서 사용하기 위해서는 kakao api 앞에 window. 을 추가해줘야 합니다.

  ```javascript
  var mapContainer = document.getElementById("map"),
    mapOption = {
      center: new window.kakao.maps.LatLng(33.450701, 126.570667),
      level: 3,
    };
  var map = new window.kakao.maps.Map(mapContainer, mapOption);
  ```

- redux 사용할 때 도움되는 도구 `redux devtools`

  리덕스 개발자 도구로 현재 스토어의 상태를 개발자 도구에서 조회할 수 있는 프로그램입니다. 어떠한 액션을 했는지, 해당 액션으로 상태가 어떻게 변화했는지 확인할 수 있습니다.

  [리덕스 데브툴 설치하기](https://chromewebstore.google.com/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=ko)

  설치 후 터미널에 아래 명령어를 입력하여 다운 받은 후 실행한다면.

  ```
  npm install @redux-devtools/extension
  ```

  F12 를 눌러 개발자 도구를 켜보면 console, network 등의 항목 외에 새롭게 redux 라는 항목이 생긴 것을 확인할 수 있습니다.

  혹은 크롬 확장 프로그램을 눌러 확인할 수 있습니다.
