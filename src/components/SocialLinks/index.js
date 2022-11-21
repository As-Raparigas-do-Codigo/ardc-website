import React from 'react';
import Icon from 'components/Icon';
import './social-links.scss';
import { Button } from 'react-bootstrap';

const socialLinks = [
  { facebook: 'https://www.facebook.com/AsRaparigasDoCodigo' },
  { linkedin: 'https://www.linkedin.com/company/raparigasdocodigo/' },
  { instagram: 'https://www.instagram.com/asraparigasdocodigo/' },
  { github: 'https://github.com/As-Raparigas-do-Codigo/' }
];

const SocialLinks = ({ variant = 'dark', changeLanguage, currentLang }) => (
  <div className={`links links--${variant}`}>
    {
      variant != 'dark' && <Button onClick={() => changeLanguage()}>{ currentLang == 'pt' ? 'en' : 'pt' }</Button>
    }
    {socialLinks.map((socialNetworkLink) => {
      let socialNetwork = Object.keys(socialNetworkLink)[0];
      return (
        <Icon key={socialNetwork} name={socialNetwork} link={socialNetworkLink[socialNetwork]} />
      );
    })}
  </div>
);

export default SocialLinks;
