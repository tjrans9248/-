import React from 'react';
import FOOTER_DATA from './FooterDataRight';
const FooterRight = () => {
  return (
    <div>
      <div className="footer-right">
        <div className="nav-notice">
          <a href="#!">공지 사항</a>
          {FOOTER_DATA[0].TOP.map(topRight => (
            <div key={topRight.id}>
              <p>
                {topRight.point}
                <span>new</span>
              </p>
              <p>
                {topRight.notice}
                <span>new</span>
              </p>
            </div>
          ))}
        </div>
        {FOOTER_DATA[0].MIDDLE.map(middleRight => (
          <div className="nav-footer-menu" key={middleRight.id}>
            <p>{middleRight.introduction}</p>
            <p>{middleRight.privateInfo}</p>
            <p>{middleRight.faq}</p>
            <p>{middleRight.scout}</p>
            <p>{middleRight.law}</p>
            <p>{middleRight.contact}</p>
            <p>{middleRight.carrier}</p>
            <p>{middleRight.info}</p>
          </div>
        ))}

        {FOOTER_DATA[0].BOTTOM.map(bottomRight => (
          <div key={bottomRight.id}>
            <p>{bottomRight.address}</p>
            <p>{bottomRight.compInfo}</p>
            <p>{bottomRight.compNum}</p>
            <p>{bottomRight.compJob}</p>
            <section>{bottomRight.compName}</section>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FooterRight;
