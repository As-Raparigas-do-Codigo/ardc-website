import React from 'react';
import Awards from 'components/Footer/Awards';
import './footer.scss';

const Footer = function () {
  return (
    <div>
      <div className="gradient">
        <Awards />
      </div>
    </div>
  );
};

export default Footer;
