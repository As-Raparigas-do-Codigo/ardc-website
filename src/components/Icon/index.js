import React from "react";
import { ReactComponent as InstagramDefaultIcon } from "../../assets/icons/social/instagram.svg";
import { ReactComponent as InstagramTopBarIcon } from "../../assets/icons/social/instagram_white.svg";
import { ReactComponent as FacebookDefaultIcon } from "../../assets/icons/social/facebook.svg";
import { ReactComponent as FacebookTopBarIcon } from "../../assets/icons/social/facebook_white.svg";
import { ReactComponent as LinkedinDefaultIcon } from "../../assets/icons/social/linkedin.svg";
import { ReactComponent as LinkedinTopBarIcon } from "../../assets/icons/social/linkedin_white.svg";
import { ReactComponent as GithubDefaultIcon } from "../../assets/icons/social/github.svg";
import { ReactComponent as GithubTopBarIcon } from "../../assets/icons/social/github_white.svg";
import { ReactComponent as TwitterIcon } from "../../assets/icons/social/twitter.svg";
import { ReactComponent as MediumIcon } from "../../assets/icons/social/medium.svg";
import { ReactComponent as Other } from "../../assets/icons/social/other.svg";
import { ReactComponent as EmailIcon } from "../../assets/icons/email.svg";

function Icon({ name, link = "#", onClickAction = null, theme = "default" }) {
  const iconsMap = {
    instagram: {
      default: <InstagramDefaultIcon />,
      topBar: <InstagramTopBarIcon />
    },
    facebook: {
      default: <FacebookDefaultIcon />,
      topBar: <FacebookTopBarIcon />
    },
    linkedin: {
      default: <LinkedinDefaultIcon />,
      topBar: <LinkedinTopBarIcon />
    },
    github: {
      default: <GithubDefaultIcon />,
      topBar: <GithubTopBarIcon />
    },
    twitter: {
      default: <TwitterIcon />
    },
    medium: {
      default: <MediumIcon />
    },
    email: {
      default: <EmailIcon />
    },
    other: {
      default: <Other />
    }
  };

  const icon = iconsMap[name][theme]
  const ClickableIcon = <span onClick={onClickAction}>{icon}</span>;
  const LinkableIcon = (
    <a
      className={ "me-3 social-link-svg"}
      href={link}
      target="_blank"
      rel="noreferrer">
      {icon}
    </a>
  );

  return onClickAction ? ClickableIcon : LinkableIcon;
}

export default Icon;
