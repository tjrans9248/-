<div align="center">
  🍫 HUSH (현재 리펙토링 진행중 입니다.. 조금만 기다려 주세요) 🍫

Hush 는 달콤한 디저트를 전문적으로 판매하는 웹사이트 입니다.

초기 로그인시 포인트가 제공되니 원하시는걸 구매해보세요~!!

### 🛠️ TECH 🛠️

  <img src="https://img.shields.io/badge/React-09D3AC?style=flat&logo=React&logoColor=white"/>
   <img src="https://img.shields.io/badge/Typescript-3178C6?style=flat&logo=Typescript&logoColor=white"/>
   <img src="https://img.shields.io/badge/Sass-CC6699?style=flat&logo=sass&logoColor=white"/>
   <img src="https://img.shields.io/badge/Redux-764ABC?style=flat&logo=Redux&logoColor=white"/>
   <img src="https://img.shields.io/badge/styled-components-DB7093?style=flat&logo=styled-components&logoColor=white"/>

</div>

[<div align="center">HUSH 회고록</div>](https://velog.io/@tjrans9248/TIL-1%EC%B0%A8-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-%ED%9A%8C%EA%B3%A0%EB%A1%9DHUSH)

[<div align="center">HUSH 리팩토링1</div>](https://velog.io/@tjrans9248/%EB%A6%AC%ED%8C%A9%ED%86%A0%EB%A7%81%EC%9D%84-%EC%A7%84%ED%96%89%ED%95%B4-%EB%B3%B4%EB%A9%B0-1)

[<div align="center">HUSH 리팩토링2</div>](https://velog.io/@tjrans9248/%EB%A6%AC%ED%8C%A9%ED%86%A0%EB%A7%81%EC%9D%84-%EC%A7%84%ED%96%89%ED%95%B4%EB%B3%B4%EB%A9%B0....2)

[<div align="center">HUSH 리팩토링3</div>](https://velog.io/@tjrans9248/%EB%A6%AC%ED%8C%A9%ED%86%A0%EB%A7%81%EC%9D%84-%EC%A7%84%ED%96%89%ED%95%B4-%EB%B3%B4%EB%A9%B0...3)

[<div align="center">HUSH 리팩토링 성능개선</div>](https://velog.io/@tjrans9248/%EB%A6%AC%ED%8C%A9%ED%86%A0%EB%A7%81%EC%9D%84-%EC%A7%84%ED%96%89%ED%95%B4-%EB%B3%B4%EB%A9%B0...-lighthouse)

---

# `React.js`

<img src="https://augnitive.com/wp-content/uploads/2019/10/reactbanner.png" style='height: 100px'>

1. 리액트는 컴포넌트 기반의 아키텍쳐이다 보니, 한번 잘 만들어놓으면, 다른 곳에서도 쉽게 사용이 가능합니다. 그래서 효울적이고, 생산성도 높고, 유지조수에도 적합해 선택하게 되었습니다.

2. 위대한 기업에 대한 신뢰가 있어서 입니다. 에러에 맞닦드리거나, 해결방법이 어려울경우, 공식문서를 참고를 많이 할 수 있고, 웬만한것은 공식문서에서 해결할 수 있기 때문입니다.

3. React 는 html과 유사한 문법인 jsx 문법을 사용합니다. html을 작성하듯 코드를 작성할 수 있기 때문에, 가독성에도 좋을것이라 판단했기 때문입니다.

# `Typescript`

<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdOEi-bSS4koMCjuds0MnvbeamMhtYt0e_Rg&usqp=CAU" style='height: 90px'>

1. 버그 예방차원에서 사용했습니다. 자바스크립트는 선언할 때 타입을 지정해주지 않기 떄문에, 동작하면서 언제 형 변환이 되어있을 수도 있고, 그런 부분들이 예상하지 못한 버그로 이어질수도 있습니다. 타입스크립트를 활용하면 컴파일 단계에서 타입에러를 막을 수 있기 때문입니다.
2. 코드의 퀄리티가 향상될 수 있습니다.
   타입스크립트를 활용함으로써, 데이터의 'type' 을 알수 있습니다. 그렇기 떄문에, 코드작성이 좀 더 직관적으로 만들어줍니다. 그렇기 때문에 선택했습니다.

# `Redux`

<img width="250" alt="스크린샷 2023-02-20 오후 5 15 25" src="https://user-images.githubusercontent.com/103636274/220049713-9f5d359e-8900-47de-9ac7-b82b08cb9147.png">

1. 가장 상위 컴포넌트에서 데이터를 하위 컴포넌트로 props를 활용하여 전달해야할 경우, 같은 작업을 반복해야되는 번거로움이 있었습니다. redux를 활용하면 props depth를 줄일 수 있고, 효율적으로 활용가능하여 선택하게 되었습니다.
2. state를 store에서 전역으로 관리하여, props drilling의 번거로움을 줄이는 경험을 할 수 있었습니다.

# 리팩토링

> 프로젝트가 완료된 후 리팩토링을 진행해 주었습니다.
> 리팩토링을 진행해 주며, Typsescript와 Redux를 접목해주었고, 진행하는 과정에서 생기는 type에러를 해결해 주었습니다. 그리고 redux를 활용해 전역적으로 state를 관리했습니다.

- React 컴포넌트를 좀더 작은 단위로 나누어 가독성 및 재활용성을 고려하여 향상시킴
- 함수명, 변수명을 변경함으로써, 가독성을 향상시킴
- 웹 성능 개선을 위해 이미지 파일을 `webp` 변환함으로써, 용량을 `4배 (3.6 -> 0.7)` 정도 줄이고 `lighthouse` performance 부분 성능점수를 소폭 향상 시킴
- 유지보수를 위해 상수데이터를 별도로 파일로 분리하여 관리함

# 프로젝트 기능

## 🍫 Hush(디저트) 🍫

- 처음회원가입시, 초기 포인트를 제공(100,000원) 이 포인트를 이용해서 결제하기누르면, 포인트가 차감되면서 메인페이지로 이동하고, UI상 포인트차감 보여주기. (검색창 대신 포인트숫자 보여주기)

1. 로그인, 회원가입

- 유효성검사 맞으면 메인페이지 이동
- 회원가입후 다시 로그인로 간후 다시 로그인

![01 회원가입페이지](https://user-images.githubusercontent.com/103636274/193209653-b512b19d-d29d-452c-9c96-2481368a05d6.png)

![02 로그인페이지](https://user-images.githubusercontent.com/103636274/193209635-679cd55f-46de-40e2-a3bf-3176607cb6aa.png)

2. 메인페이지

- 메인비쥬얼 슬라이드, 메인 애니메이션 효과

![00 메인페이지](https://user-images.githubusercontent.com/103636274/193209773-eff64389-f8ee-4e79-8675-bce5949ca537.png)

3. 제품페이지(완료시 상세페이지 지원)

- 재고초기수량(50개)
- 카테고리별 상품은 8개, 페이지는 3페이지로(이미지가 있으면)
- 메뉴카테고리별로 탭메뉴 기능을 만들어 해당 탭을 클릭하면 해당 제품이 보이도록 기능 구현
- 낮은 가격순, 높은 가격순으로 필터링이 가능하도록 구현
- 페이지네이션기능으로 지정해놓은 갯수를 정해두면 그 갯수만 보여주고 다음페이지로 넘어가게 구현
- 아이템 마우스 호버시 (그림만보이도록, 백그라운드 색상변경, opacity)

  ![03 제품페이지](https://user-images.githubusercontent.com/103636274/193210036-623b9086-5f49-4ec1-80b6-32ee6f909552.png)

4. 상세페이지

- 수량별 가격 상승
- 장바구니, 좋아요 클릭하면 해당페이지로 이동
- 제품탭 효과 전체다 주기
- 제품후기, 제품후기 작성 게시글 업로드
- ui적으로 날짜, 댓글내용, 아이디(맨첫글자만 보이고, 나머지는 ‘\*’ ) 보여줌
- 정해 놓은 최소, 최대 수량을 넘어갈경우, alert창을 띄움

  ![05 상세페이지](https://user-images.githubusercontent.com/103636274/193210382-19a07f24-de21-4f8c-9af1-d97255b8aa04.png)

5. 결제페이지(헤더 nav footer, 스크롤탑)

- 배송비는 무조건 무료
- 사은품, 덕찌 제거
- 주문자정보
- fetch(GET)으로 받아온다?
- 컨텍스트로 불러온다
- 제품정보랑 똑같이
- 결제수단 제거
- 결제정보확인 동의 클릭시만!
- 페이지 이동 가능하도록 유효성

  ![06 결제페이지](https://user-images.githubusercontent.com/103636274/193210671-471361cb-9d3b-4041-9a27-4cfe629cf0aa.png)

6. 장바구니 페이지

- 체크박스 기능 구현, 전체 선택, 단일 선택 가능, 선택삭제 가능, 수량 조절 기능 구현
- 주문하기 버튼을 누르면 결제페이지로
- 쇼핑계속하기 버튼을 누르면 메인페이지로

![04 장바구니페이지](https://user-images.githubusercontent.com/103636274/193210694-ff098bd4-382a-46b5-9ef1-5131ed5da4a1.png)

7. 찜목록 페이지

- 체크박스 기능 구현, 전체 선택, 단일 선택 가능, 선택삭제 가능, 수량 조절 기능 구현
