import React from 'react';
import Icon from 'components/Icon';
import './social-links.scss';

const socialLinks = [
  { facebook: 'https://www.facebook.com/AsRaparigasDoCodigo' },
  { linkedin: 'https://www.linkedin.com/company/raparigasdocodigo/' },
  { instagram: 'https://www.instagram.com/asraparigasdocodigo/' },
  { github: 'https://github.com/As-Raparigas-do-Codigo/' }
];

const SocialLinks = ({ variant = 'dark' }) => (
  <div className={`links links--${variant}`}>
    {socialLinks.map((socialNetworkLink) => {
      let socialNetwork = Object.keys(socialNetworkLink)[0];
      return (
        <Icon key={socialNetwork} name={socialNetwork} link={socialNetworkLink[socialNetwork]} />
      );
    })}

    {/* {variant != 'dark' && (
      <button
        style={{ lineHeight: '100%', height: '50%' }}
        className="button-secondary me-3 ms-5"
        type="submit"
        onClick={() => changeLanguage()}>
        {currentLang == 'pt' ? 'en' : 'pt'}
      </button>
    )} */}
  </div>
);

export default SocialLinks;
