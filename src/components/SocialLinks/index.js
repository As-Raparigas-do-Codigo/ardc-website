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
    <div className="links">
      {socialLinks.map((socialNetworkLink) => {
        let socialNetwork = Object.keys(socialNetworkLink)[0];
        return (
          <Icon key={socialNetwork} name={socialNetwork} link={socialNetworkLink[socialNetwork]} theme={'topBar'} />
        );
      })}
    </div>
  );
}

export default SocialLinks;
