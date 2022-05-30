import React from "react";

import HelpProject from "components/Footer/HelpProject";
import Informations from "components/Footer/Informations";

import "./footer.scss";

const Footer = function () {
  return (
    <div>
      <div className="bg-pink text-center">
        <HelpProject />
      </div>
      <div className="gradient">
        <Informations />
      </div>
    </div>
  );
};

export default Footer;
