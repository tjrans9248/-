<div align="center">
  🍫 HUSH (현재 리펙토링 진행중 입니다.. 조금만 기다려 주세요) 🍫

Hush 는 달콤한 디저트를 전문적으로 판매하는 웹사이트 입니다.

초기 로그인시 포인트가 제공되니 원하시는걸 구매해보세요~!!

🛠️ TECH 🛠️

  <img src="https://img.shields.io/badge/React-09D3AC?style=flat&logo=React&logoColor=white"/>
   <img src="https://img.shields.io/badge/Typescript-3178C6?style=flat&logo=Typescript&logoColor=white"/>
   <img src="https://img.shields.io/badge/Sass-CC6699?style=flat&logo=sass&logoColor=white"/>
   <img src="https://img.shields.io/badge/Redux-764ABC?style=flat&logo=Redux&logoColor=white"/>

</div>

---

## 기술 스택

### React.js

<img src="">
-

## 시연 사진

## hush(디저트)

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

8. navbar, footer
