import React from 'react';

import FooterSupport from './components/FooterSupport';
import FooterLeft from './components/FooterLeft';
import FooterRight from './components/FooterRight';
import './Footer.scss';

function Footer() {
  const easterEgg = () => {
    alert('외쳐 갓승렬!');
  };

  return (
    <div className="footer-wrap">
      <FooterSupport />
      <div className="footer-main">
        <FooterLeft easterEgg={easterEgg} />
        <FooterRight />
      </div>
    </div>
  );
}

export default Footer;
