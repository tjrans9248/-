import React from 'react';
import FOOTER_DATA from './FooterData';

const FooterLeft = ({ easterEgg }) => {
  return (
    <div>
      <div className="footer-left">
        <div className="footer-input">
          <input type="text" placeholder="이메일주소를 입력해주세요" />
          <button onClick={easterEgg}>구독</button>
        </div>
        {FOOTER_DATA.map(data => (
          <p key={data.id}>{data.top}</p>
        ))}
        {FOOTER_DATA.map(item => (
          <div className="cs-center" key={item.id}>
            <strong>{item.footerCenter?.center[0].title}</strong>
            <strong>{item.footerCenter?.center[1].title}</strong>
            <strong>{item.footerCenter?.center[0].number}</strong>
            <strong>{item.footerCenter?.center[1].number}</strong>
            <p>{item.footerCenter?.center[0].email}</p>
            <p>{item.footerCenter?.center[1].email}</p>
            <div className="footer-phone">
              <span>{item.footerCenter?.contact[0].title}</span>
              <span>{item.footerCenter?.contact[0].time}</span>
            </div>
            <div className="footer-phone">
              <span>{item.footerCenter?.contact[1].title}</span>
              <span>{item.footerCenter?.contact[1].time}</span>
            </div>
          </div>
        ))}

        <div className="sns-box">
          <img src="/images/Footer/IconInstar.png" alt="인스타그램" />
          <img src="/images/Footer/IconFace.png" alt="페이스북" />
          <img src="/images/Footer/IconMini.png" alt="네이트온" />
          <img src="/images/Footer/IconTalk.png" alt="카카오톡" />
        </div>
      </div>
    </div>
  );
};

export default FooterLeft;
