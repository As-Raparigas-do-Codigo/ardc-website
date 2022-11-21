import React from 'react';
import Awards from 'components/Footer/Awards';
import './footer.scss';

const Footer = function ({ translation }) {
  return (
    <div>
      <div className="gradient">
        <Awards translation={translation}/>
      </div>
    </div>
  );
};

export default Footer;
