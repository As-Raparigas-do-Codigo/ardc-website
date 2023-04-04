import React from 'react';
import Awards from 'components/Footer/Awards';
import SupportProject from 'components/Footer/SupportTheProject';
import './footer.scss';

const Footer = function ({ translation }) {
  return (
    <div>
      <div className="bg-pink">
        <SupportProject translation={translation} />
      </div>
      <div className="gradient">
        <Awards translation={translation} />
      </div>
    </div>
  );
};

export default Footer;
