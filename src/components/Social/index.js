import React from 'react';
import Container from 'react-bootstrap/Container';
import SocialLinks from 'components/SocialLinks';
import './social.scss';

function SocialBar({ changeLanguage, currentLang }) {
  return (
    <div className="social-bar">
      <Container>
        <SocialLinks variant="light" changeLanguage={changeLanguage} currentLang={currentLang}/>
      </Container>
    </div>
  );
}

export default SocialBar;
