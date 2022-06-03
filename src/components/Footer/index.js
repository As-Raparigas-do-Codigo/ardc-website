import React from "react";

import HelpProject from "components/Footer/HelpProject";
import Informations from "components/Footer/Informations";

import "./footer.scss";

const Footer = function () {
    //<div className="bg-pink text-center">
    //<HelpProject />
    //</div>
    return (
    <div>
      <div className="gradient">
        <Informations />
      </div>
    </div>
  );
};

export default Footer;
