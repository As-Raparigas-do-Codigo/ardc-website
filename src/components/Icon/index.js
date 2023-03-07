import React from 'react';
import { ReactComponent as InstagramIcon } from '../../assets/icons/social/instagram.svg';
import { ReactComponent as FacebookIcon } from '../../assets/icons/social/facebook.svg';
import { ReactComponent as GithubIcon } from '../../assets/icons/social/github.svg';
import { ReactComponent as TwitterIcon } from '../../assets/icons/social/twitter.svg';
import { ReactComponent as LinkedinIcon } from '../../assets/icons/social/linkedin.svg';
import { ReactComponent as MediumIcon } from '../../assets/icons/social/medium.svg';
import { ReactComponent as OutsystemsIcon } from '../../assets/icons/social/outsystems.svg';
import { ReactComponent as Other } from '../../assets/icons/social/other.svg';
import { ReactComponent as EmailIcon } from '../../assets/icons/email.svg';

function Icon({ name, link = '#', onClickAction = null }) {
  const iconsMap = {
    instagram: <InstagramIcon />,
    facebook: <FacebookIcon />,
    linkedin: <LinkedinIcon />,
    twitter: <TwitterIcon />,
    github: <GithubIcon />,
    medium: <MediumIcon />,
    email: <EmailIcon />,
    outsystems: <OutsystemsIcon />,
    other: <Other />,
  };

  const ClickableIcon = <span onClick={onClickAction}>{iconsMap[name]}</span>;
  const LinkableIcon = (
    <a className={'me-3 social-link-svg'} href={link} target="_blank" rel="noreferrer">
      {iconsMap[name]}
    </a>
  );

  return onClickAction ? ClickableIcon : LinkableIcon;
}

export default Icon;
