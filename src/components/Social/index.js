import React from 'react';
import Container from 'react-bootstrap/Container';
import SocialLinks from 'components/SocialLinks';
import './social.scss';

function SocialBar({ changeLanguage }) {
  return (
    <div className="social-bar">
      <Container>
        <SocialLinks variant="light" changeLanguage={changeLanguage}/>
      </Container>
    </div>
  );
}

export default SocialBar;
