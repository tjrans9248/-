import React from 'react';
const FooterRight = () => {
  return (
    <div>
      <div className="footer-right">
        <div className="nav-notice">
          <a href="#!">공지 사항</a>
          <p>
            2022-09-20 [공지] 회원가입 시 초기 100,000포인트 제공
            <span>new</span>
          </p>
          <p>
            2022-09-20 [공지] Hush팀 화이팅입니다요오호호호홓
            <span>new</span>
          </p>
        </div>
        <div className="nav-footer-menu">
          {FOOTER_DATA.map(data => (
            <p key={data.id}>{data.title}</p>
          ))}
        </div>
        <p>서울특별시 강남구 테헤란로 427 | 위워크</p>
        <p>사이트 운영자: 주식회사 허쉬코리아 | 대표이사 갓다영</p>
        <p>사업자 등록번호 : 201-81-00007 사업자정보확인</p>
        <p>통신판매업 신고번호 2022-서울강남</p>
        <section>COPYRIGHT ©LUSHKOREA.CO.LTD.ALL RIGHTS RESERVED.</section>
      </div>
    </div>
  );
};

export default FooterRight;

const FOOTER_DATA = [
  { title: '러쉬소개' },
  { title: '개인정보방침' },
  { title: 'FAQ' },
  { title: '스카우트' },
  { title: '영상정보관리지침' },
  { title: '1:1문의' },
  { title: '채용안내' },
  { title: '이용약관' },
];
