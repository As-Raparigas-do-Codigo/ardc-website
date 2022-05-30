import React from "react";
import Icon from "components/Icon";

const socialLinks = [
  { facebook: "https://www.facebook.com/AsRaparigasDoCodigo" },
  { linkedin: "https://www.linkedin.com/company/raparigasdocodigo/" },
  { instagram: "https://www.instagram.com/asraparigasdocodigo/" },
  { github: "https://github.com/As-Raparigas-do-Codigo/" },
];

function SocialLinks() {
  return (
    <div>
      {socialLinks.map((socialNetworkLink) => {
        let socialNetwork = Object.keys(socialNetworkLink)[0];
        return (
          <Icon name={socialNetwork} link={socialNetworkLink[socialNetwork]} />
        );
      })}
    </div>
  );
}

export default SocialLinks;
