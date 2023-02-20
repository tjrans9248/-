import React from 'react';
import FooterSupport from './components/FooterSupport';
import FooterLeft from './components/FooterLeft';
import FooterRight from './components/FooterRight';
import './Footer.scss';

function Footer() {
  return (
    <div className="footer-wrap">
      <FooterSupport />
      <div className="footer-main">
        <FooterLeft />
        <FooterRight />
      </div>
    </div>
  );
}

export default Footer;
